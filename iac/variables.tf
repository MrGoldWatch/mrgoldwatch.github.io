variable "bucket_name" {
  default = "sbogfc"
  description = "The name of the bucket"
}

variable "aws_region" {
  type = string
  default = "us-east-1"
}

# Namecheap
variable "namecheap_api_username" {
  description = "Namecheap APIUsername"
}
variable "namecheap_api_key" {
  description = "Namecheap APIKey"
}

# Domains
variable "domain_name" {
  description = "Base domain for production"
  default = "hkarts.net"
}

variable "prod_backend_domain" {
  description = "Backend web domain for production"
  default = "api.hkarts.net"
}