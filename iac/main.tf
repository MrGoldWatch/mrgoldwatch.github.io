provider "aws" {
  region = var.aws_region
}

// The domain certificate needs to be created in us-east-1
// We create a provider with `use1` alias just for this purpose
provider "aws" {
  region = "us-east-1"
  alias = "use1"
}

locals {
  domain = "hkarts.net"
  s3_origin_id = "sbog"
}

/* resource "aws_iam_policy" "s3-website-policy" {
  name        = "website_policy"
  path        = "/"
  description = "sbog website policy"

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
  policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Action": [
                    "s3:GetObject"
                ],
                "Principal": "*",
                "Resource": [
                    "arn:aws:s3:::${var.bucket_name}/*"
                ]
            }
        ]
  })
} */

resource "aws_s3_bucket" "sbog" {
  bucket = var.bucket_name
  acl = "public-read"
  /* policy = aws_iam_policy.s3-website-policy.policy */
  policy = data.aws_iam_policy_document.s3-website-policy.json

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "react-aws-terraform-github-actions-s3-access-control" {
  bucket = aws_s3_bucket.sbog.id

  block_public_acls   = true
  ignore_public_acls = true
}

resource "aws_route53_zone" "prod" {
  name = var.domain_name
}

resource "namecheap_domain_records" "prod" {
  domain = var.domain_name
  mode   = "OVERWRITE"
  
  nameservers = [
    aws_route53_zone.prod.name_servers[0],
    aws_route53_zone.prod.name_servers[1],
    aws_route53_zone.prod.name_servers[2],
    aws_route53_zone.prod.name_servers[3],
  ]
}

resource "aws_acm_certificate" "sbog_cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"
}

resource "aws_route53_record" "prod_backend_certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.sbog_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.prod.zone_id
}

resource "aws_acm_certificate_validation" "prod_backend" {
  certificate_arn         = aws_acm_certificate.sbog_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.prod_backend_certificate_validation : record.fqdn]
}


/* UNCOMMENT AND APPLY ONLY AFTER ABOVE PART IS APPLIED FIRST */
resource "aws_cloudfront_distribution" "react-aws-terraform-github-actions" {
  enabled = true
  is_ipv6_enabled = true
  comment = "The cloudfront distribution for sbogfutsal."
  default_root_object = "index.html"

  aliases = [local.domain]

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      query_string = false
      cookies {
        forward = "all"
      }
    }
  }
  origin {
    domain_name = aws_s3_bucket.sbog.bucket_regional_domain_name
    origin_id = local.s3_origin_id
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.sbog_cert.arn
    
    ssl_support_method = "sni-only"
  }
  custom_error_response {
    error_code = 404
    error_caching_min_ttl = 86400
    response_page_path = "/index.html"
    response_code = 200
  }
}

resource "aws_iam_policy" "cloudfront-invalidate-paths" {
  name = "cloudfront-invalidate-paths"
  description = "Used by CI pipelines to delete cached paths"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid = "VisualEditor0",
        Effect = "Allow",
        Action = "cloudfront:CreateInvalidation",
        Resource = "*"
      }
    ]
  })
}