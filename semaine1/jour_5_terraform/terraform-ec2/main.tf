# AWS
provider "aws" {
  region = "eu-west-3" 
}

# Création d'une instance EC2
resource "aws_instance" "web" {
  ami           = "ami-0eaf62527f5bb8940"  
  instance_type = "t2.micro"
  
  tags = {
    Name = "TerraformInstance"
  }
}