output "acm_certificate_arn" {
  /* description = "ID of project VPC" */
  value       = aws_acm_certificate.sbog_cert.id
}

output "acm_certificate_arn2" {
  /* description = "ID of project VPC" */
  value       = aws_acm_certificate.sbog_cert.arn
}