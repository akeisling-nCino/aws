import type { Question } from "../types/quiz";

export const questionBank: Question[] = [
  // Core Services - Domain 3: Cloud Technology and Services
  {
    question: "Which AWS service provides a managed NoSQL database?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    correct: 1,
    explanation:
      "Amazon DynamoDB is AWS's fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
  },
  {
    question:
      "Which AWS service provides scalable compute capacity in the cloud?",
    options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon CloudWatch"],
    correct: 1,
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides secure, resizable compute capacity in the cloud, allowing you to launch virtual servers as needed.",
  },
  {
    question:
      "Which AWS service is best for storing and retrieving any amount of data from anywhere?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon Glacier"],
    correct: 2,
    explanation:
      "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
  },
  {
    question: "What does AWS Lambda allow you to do?",
    options: [
      "Store files in the cloud",
      "Run code without provisioning servers",
      "Monitor network traffic",
      "Create virtual networks",
    ],
    correct: 1,
    explanation:
      "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, automatically scaling and managing the infrastructure.",
  },
  {
    question: "Which AWS service provides a managed relational database?",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon S3", "Amazon Redshift"],
    correct: 1,
    explanation:
      "Amazon RDS (Relational Database Service) makes it easy to set up, operate, and scale a relational database in the cloud, supporting multiple database engines.",
  },

  // Cloud Concepts & Migration - Domain 1: Cloud Concepts
  {
    question:
      "What is the AWS Cloud Adoption Framework (CAF) primarily designed to help organizations with?",
    options: [
      "Technical implementation of AWS services",
      "Structuring cloud adoption efforts and reducing business risks",
      "Cost optimization strategies",
      "Security compliance requirements",
    ],
    correct: 1,
    explanation:
      "The AWS Cloud Adoption Framework (CAF) helps organizations structure their cloud adoption journey, reduce business risks, improve ESG performance, and increase operational efficiency through proven guidance and best practices.",
  },
  {
    question:
      "Which of the following is a key benefit of the AWS Cloud Adoption Framework (CAF)?",
    options: [
      "Automatic application migration",
      "Reduced business risk and improved ESG performance",
      "Lower AWS service costs",
      "Immediate technical support",
    ],
    correct: 1,
    explanation:
      "AWS CAF helps organizations reduce business risk, improve environmental, social, and governance (ESG) performance, increase revenue, and improve operational efficiency through structured cloud adoption.",
  },
  {
    question:
      "What is a primary economic benefit of migrating from fixed costs to variable costs in the cloud?",
    options: [
      "You always pay the same amount regardless of usage",
      "You pay only for what you use, when you use it",
      "You get unlimited resources for a fixed price",
      "You avoid all operational expenses",
    ],
    correct: 1,
    explanation:
      "Moving from fixed costs (capital expenditures) to variable costs (operational expenditures) means you pay only for the computing resources you consume, providing cost flexibility and eliminating large upfront investments.",
  },
  {
    question:
      "Which cost factor is typically REDUCED when moving from on-premises to AWS Cloud?",
    options: [
      "Network bandwidth costs",
      "Data center real estate and maintenance costs",
      "Software licensing fees",
      "Employee training costs",
    ],
    correct: 1,
    explanation:
      "Moving to AWS eliminates the need for physical data center space, facilities maintenance, power, cooling, and hardware replacement costs that are required for on-premises infrastructure.",
  },
  {
    question:
      "What does 'rightsizing' mean in the context of AWS cloud economics?",
    options: [
      "Choosing the largest instance type available",
      "Matching instance types and sizes to workload requirements",
      "Using only Reserved Instances",
      "Selecting the cheapest available option",
    ],
    correct: 1,
    explanation:
      "Rightsizing involves matching AWS instance types and sizes to your actual workload performance and capacity requirements to optimize both cost and performance.",
  },
  {
    question:
      "What is the main difference between Bring Your Own License (BYOL) and included license models?",
    options: [
      "BYOL is always more expensive",
      "BYOL allows you to use existing licenses while included licenses are provided by AWS",
      "Included licenses work only on-premises",
      "BYOL requires special hardware",
    ],
    correct: 1,
    explanation:
      "BYOL allows you to use your existing software licenses in the cloud, while included license models provide the licensing as part of the AWS service, which can affect overall cost considerations.",
  },

  // Well-Architected Framework - Domain 1: Cloud Concepts
  {
    question:
      "What is the AWS Well-Architected Framework pillar that focuses on the ability to recover from failures?",
    options: [
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
    ],
    correct: 1,
    explanation:
      "The Reliability pillar focuses on the ability of a workload to perform its intended function correctly and consistently, and to recover from failures.",
  },
  {
    question:
      "Which Well-Architected Framework pillar focuses on using computing resources efficiently?",
    options: [
      "Cost Optimization",
      "Performance Efficiency",
      "Reliability",
      "Security",
    ],
    correct: 1,
    explanation:
      "The Performance Efficiency pillar focuses on using computing resources efficiently to meet system requirements and maintaining efficiency as demand changes.",
  },
  {
    question: "How many pillars are in the AWS Well-Architected Framework?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation:
      "The AWS Well-Architected Framework has 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
  },
  {
    question:
      "Which Well-Architected pillar includes the principle of 'implement security at all layers'?",
    options: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
    ],
    correct: 1,
    explanation:
      "The Security pillar includes implementing security at all layers, with defense in depth as a key principle.",
  },
  {
    question:
      "The 'design for failure' principle belongs to which Well-Architected pillar?",
    options: [
      "Security",
      "Reliability",
      "Cost Optimization",
      "Performance Efficiency",
    ],
    correct: 1,
    explanation:
      "The Reliability pillar includes designing for failure and implementing automated recovery procedures.",
  },

  // Security & IAM - Domain 2: Security and Compliance
  {
    question: "What does the AWS Shared Responsibility Model define?",
    options: [
      "Pricing responsibilities",
      "Security responsibilities between AWS and customers",
      "Data backup responsibilities",
      "Network performance responsibilities",
    ],
    correct: 1,
    explanation:
      "The Shared Responsibility Model defines security and compliance as a shared responsibility between AWS and the customer.",
  },
  {
    question:
      "What is the primary purpose of AWS Identity and Access Management (IAM)?",
    options: [
      "Monitor application performance",
      "Manage user access and permissions",
      "Store application data",
      "Provide content delivery",
    ],
    correct: 1,
    explanation:
      "AWS IAM enables you to manage access to AWS services and resources securely by controlling who is authenticated and authorized to use resources.",
  },
  {
    question:
      "In the AWS Shared Responsibility Model, who is responsible for patching the guest operating system?",
    options: [
      "AWS",
      "Customer",
      "Both AWS and Customer",
      "Third-party vendors",
    ],
    correct: 1,
    explanation:
      "Customers are responsible for patching guest operating systems and applications, while AWS handles the underlying infrastructure.",
  },
  {
    question: "What is the root user in an AWS account?",
    options: [
      "A service account",
      "The initial user with complete access to all AWS services and resources",
      "A read-only user",
      "A temporary user",
    ],
    correct: 1,
    explanation:
      "The root user is the initial user created with an AWS account that has complete access to all services and resources. It should be secured with MFA and used sparingly for account-level tasks only.",
  },
  {
    question:
      "Which of the following tasks can ONLY be performed by the AWS account root user?",
    options: [
      "Creating IAM users and policies",
      "Changing the account's support plan and closing the account",
      "Launching EC2 instances",
      "Creating S3 buckets",
    ],
    correct: 1,
    explanation:
      "Only the root user can perform account-level tasks such as changing the support plan, closing the AWS account, changing the account email address, and modifying account settings that affect billing.",
  },
  {
    question:
      "What is the MOST important security practice for the AWS root user account?",
    options: [
      "Use it for daily administrative tasks",
      "Enable multi-factor authentication (MFA) and avoid regular use",
      "Share the credentials with your team",
      "Store the password in a text file",
    ],
    correct: 1,
    explanation:
      "The root user should have MFA enabled and should only be used for tasks that specifically require root user access. For daily operations, use IAM users with appropriate permissions following the principle of least privilege.",
  },
  {
    question:
      "Which method provides the BEST protection for the AWS root user account?",
    options: [
      "Complex password only",
      "MFA device plus strong password and limited use",
      "API access keys for automation",
      "Shared access across the team",
    ],
    correct: 1,
    explanation:
      "The best protection combines a strong unique password, MFA device, and limiting root user access to only those tasks that specifically require root user privileges, such as account closure or support plan changes.",
  },
  {
    question: "Which AWS service provides encryption key management?",
    options: ["AWS IAM", "AWS KMS", "AWS Shield", "AWS WAF"],
    correct: 1,
    explanation:
      "AWS Key Management Service (KMS) is a managed service that makes it easy to create and control encryption keys.",
  },
  {
    question:
      "What is AWS IAM Identity Center (formerly AWS Single Sign-On) used for?",
    options: [
      "Managing encryption keys",
      "Centrally managing single sign-on access to multiple AWS accounts and applications",
      "Creating VPC networks",
      "Monitoring application performance",
    ],
    correct: 1,
    explanation:
      "AWS IAM Identity Center provides single sign-on (SSO) access to multiple AWS accounts and cloud applications from a central location, simplifying access management across organizations.",
  },
  {
    question: "What is federated identity management in AWS?",
    options: [
      "Creating multiple IAM users for each person",
      "Allowing users to access AWS using credentials from external identity providers",
      "Using only root user access",
      "Requiring separate passwords for each service",
    ],
    correct: 1,
    explanation:
      "Federated identity management allows users to access AWS services using credentials from external identity providers (like corporate Active Directory, Google, or Facebook) without creating separate IAM users.",
  },
  {
    question:
      "Which authentication method provides an additional layer of security beyond username and password?",
    options: [
      "API keys",
      "Multi-factor authentication (MFA)",
      "Security groups",
      "IAM roles",
    ],
    correct: 1,
    explanation:
      "Multi-factor authentication (MFA) adds an extra layer of security by requiring users to provide a time-based token from an MFA device in addition to their username and password.",
  },

  // Networking - Domain 3: Cloud Technology and Services
  {
    question: "What is Amazon VPC?",
    options: [
      "A content delivery network",
      "A virtual private cloud",
      "A database service",
      "A monitoring service",
    ],
    correct: 1,
    explanation:
      "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources.",
  },
  {
    question: "Which AWS service is used for content delivery and caching?",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon EBS", "Amazon EFS"],
    correct: 1,
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that delivers content with low latency and high transfer speeds.",
  },
  {
    question: "Which AWS service helps you set up a hybrid cloud architecture?",
    options: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon S3",
      "Amazon EC2",
    ],
    correct: 0,
    explanation:
      "AWS Direct Connect makes it easy to establish a dedicated network connection from your premises to AWS.",
  },
  {
    question: "What is an Internet Gateway in Amazon VPC?",
    options: [
      "A VPN connection",
      "A component that allows communication between VPC and internet",
      "A firewall service",
      "A load balancer",
    ],
    correct: 1,
    explanation:
      "An Internet Gateway is a VPC component that allows communication between your VPC and the internet.",
  },
  {
    question: "Which AWS service provides DNS web service?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon VPC",
    ],
    correct: 1,
    explanation:
      "Amazon Route 53 is a scalable DNS web service designed to route end users to internet applications.",
  },

  // Pricing & Billing - Domain 4: Billing, Pricing, and Support
  {
    question:
      "Which pricing model allows you to pay for compute capacity by the hour with no long-term commitments?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts",
    ],
    correct: 2,
    explanation:
      "On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments.",
  },
  {
    question: "What is the main benefit of AWS Reserved Instances?",
    options: [
      "Higher performance",
      "Significant cost savings",
      "Better security",
      "Automatic scaling",
    ],
    correct: 1,
    explanation:
      "Reserved Instances provide significant cost savings (up to 75%) compared to On-Demand pricing.",
  },
  {
    question: "What is the AWS Free Tier?",
    options: [
      "A paid support plan",
      "Free usage of AWS services within specified limits",
      "A discount program for startups",
      "Free training materials",
    ],
    correct: 1,
    explanation:
      "The AWS Free Tier provides free usage of many AWS services within specified limits for 12 months after account creation.",
  },
  {
    question:
      "Which AWS service helps you monitor and track your AWS resource usage and costs?",
    options: [
      "AWS CloudTrail",
      "AWS Cost Explorer",
      "Amazon CloudWatch",
      "AWS Config",
    ],
    correct: 1,
    explanation:
      "AWS Cost Explorer is a tool that enables you to view and analyze your costs and usage.",
  },
  {
    question: "What are AWS Spot Instances?",
    options: [
      "Reserved compute capacity",
      "Unused EC2 capacity available at discounted prices",
      "Dedicated physical servers",
      "High-performance computing instances",
    ],
    correct: 1,
    explanation:
      "Spot Instances allow you to use unused EC2 capacity at up to 90% discount compared to On-Demand prices.",
  },

  // Storage
  {
    question:
      "Which AWS storage service is designed for infrequent access with retrieval times of minutes to hours?",
    options: [
      "Amazon S3 Standard",
      "Amazon S3 Glacier",
      "Amazon EBS",
      "Amazon EFS",
    ],
    correct: 1,
    explanation:
      "Amazon S3 Glacier is designed for data archiving and long-term backup with retrieval times from minutes to hours.",
  },
  {
    question: "What type of storage is Amazon EBS?",
    options: [
      "Object storage",
      "Block storage",
      "File storage",
      "Archive storage",
    ],
    correct: 1,
    explanation:
      "Amazon EBS (Elastic Block Store) provides block-level storage volumes for use with Amazon EC2 instances.",
  },
  {
    question:
      "Which S3 storage class is most cost-effective for frequently accessed data?",
    options: [
      "S3 Glacier",
      "S3 Intelligent-Tiering",
      "S3 Standard",
      "S3 One Zone-Infrequent Access",
    ],
    correct: 2,
    explanation:
      "S3 Standard is designed for frequently accessed data and offers high durability, availability, and performance.",
  },
  {
    question:
      "What is the maximum size of an object that can be stored in Amazon S3?",
    options: ["5 GB", "5 TB", "1 TB", "100 GB"],
    correct: 1,
    explanation:
      "The maximum object size in Amazon S3 is 5 TB, though objects larger than 100 MB should use multipart upload.",
  },
  {
    question:
      "Which AWS service provides file storage for multiple EC2 instances?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon Glacier"],
    correct: 2,
    explanation:
      "Amazon EFS (Elastic File System) provides scalable file storage for use with multiple EC2 instances.",
  },

  // Monitoring & Management
  {
    question: "What is AWS CloudFormation used for?",
    options: [
      "Monitoring applications",
      "Infrastructure as Code",
      "Data analytics",
      "Content delivery",
    ],
    correct: 1,
    explanation:
      "AWS CloudFormation is a service that helps you model and set up your AWS resources using Infrastructure as Code.",
  },
  {
    question: "Which AWS service monitors AWS resources and applications?",
    options: [
      "AWS Config",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Systems Manager",
    ],
    correct: 1,
    explanation:
      "Amazon CloudWatch is a monitoring service for AWS cloud resources and applications.",
  },
  {
    question: "What does AWS CloudTrail provide?",
    options: [
      "Performance monitoring",
      "API call logging",
      "Cost optimization",
      "Load balancing",
    ],
    correct: 1,
    explanation:
      "AWS CloudTrail provides governance, compliance, and audit capabilities by logging AWS API calls.",
  },
  {
    question:
      "Which AWS service helps you track configuration changes to AWS resources?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Systems Manager",
    ],
    correct: 1,
    explanation:
      "AWS Config is a service that enables you to assess, audit, and evaluate configurations of your AWS resources.",
  },
  {
    question: "What is the primary purpose of AWS Systems Manager?",
    options: [
      "Database management",
      "Operational insights and management of AWS resources",
      "Network security",
      "Cost optimization",
    ],
    correct: 1,
    explanation:
      "AWS Systems Manager gives you visibility and control over your infrastructure on AWS.",
  },

  // Database Services
  {
    question: "Which AWS service provides a data warehouse solution?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    correct: 2,
    explanation:
      "Amazon Redshift is a fully managed data warehouse service that allows you to analyze data using SQL.",
  },
  {
    question: "What is Amazon Aurora?",
    options: [
      "A NoSQL database",
      "A MySQL and PostgreSQL compatible relational database",
      "A data warehouse",
      "A cache service",
    ],
    correct: 1,
    explanation:
      "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud.",
  },
  {
    question:
      "Which database service is best for mobile and web applications requiring single-digit millisecond latency?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon DocumentDB",
    ],
    correct: 1,
    explanation:
      "Amazon DynamoDB is designed for applications that need consistent, single-digit millisecond latency at any scale.",
  },
  {
    question: "What is Amazon ElastiCache used for?",
    options: [
      "Data warehousing",
      "In-memory caching",
      "File storage",
      "Database backups",
    ],
    correct: 1,
    explanation:
      "Amazon ElastiCache is a web service that makes it easy to deploy and run in-memory cache environments.",
  },
  {
    question: "Which AWS database service is compatible with MongoDB?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Neptune",
    ],
    correct: 2,
    explanation:
      "Amazon DocumentDB is a fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads.",
  },

  // Application Services
  {
    question: "Which AWS service is used for sending emails?",
    options: ["Amazon SNS", "Amazon SES", "Amazon SQS", "Amazon Connect"],
    correct: 1,
    explanation:
      "Amazon SES (Simple Email Service) is a cost-effective email service built on reliable and scalable infrastructure.",
  },
  {
    question: "What is Amazon SQS?",
    options: [
      "Email service",
      "Message queuing service",
      "Notification service",
      "File transfer service",
    ],
    correct: 1,
    explanation:
      "Amazon SQS (Simple Queue Service) is a fully managed message queuing service for decoupling applications.",
  },
  {
    question: "Which AWS service provides pub/sub messaging?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon SES", "AWS Step Functions"],
    correct: 1,
    explanation:
      "Amazon SNS (Simple Notification Service) is a fully managed messaging service for pub/sub communication.",
  },
  {
    question: "What is AWS Step Functions used for?",
    options: [
      "Database management",
      "Workflow coordination",
      "File storage",
      "Load balancing",
    ],
    correct: 1,
    explanation:
      "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows.",
  },
  {
    question: "Which AWS service provides API management?",
    options: [
      "Amazon CloudFront",
      "AWS API Gateway",
      "AWS Lambda",
      "Amazon Route 53",
    ],
    correct: 1,
    explanation:
      "AWS API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs.",
  },

  // Analytics & Machine Learning
  {
    question: "Which AWS service is designed for big data processing?",
    options: ["Amazon RDS", "Amazon EMR", "Amazon S3", "Amazon CloudWatch"],
    correct: 1,
    explanation:
      "Amazon EMR (Elastic MapReduce) is a cloud big data platform for processing and analyzing large amounts of data.",
  },
  {
    question: "What is Amazon Kinesis used for?",
    options: [
      "Static website hosting",
      "Real-time data streaming",
      "Email delivery",
      "Database backup",
    ],
    correct: 1,
    explanation:
      "Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data.",
  },
  {
    question:
      "Which AWS service provides business intelligence and data visualization?",
    options: ["Amazon Redshift", "Amazon QuickSight", "Amazon EMR", "AWS Glue"],
    correct: 1,
    explanation:
      "Amazon QuickSight is a fast, cloud-powered business intelligence service for building visualizations.",
  },
  {
    question: "What is AWS Glue?",
    options: [
      "A machine learning service",
      "An ETL service",
      "A database service",
      "A monitoring service",
    ],
    correct: 1,
    explanation:
      "AWS Glue is a fully managed extract, transform, and load (ETL) service for preparing data for analytics.",
  },
  {
    question: "Which AWS service provides pre-built machine learning models?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "AWS Lambda",
      "Amazon EC2",
    ],
    correct: 1,
    explanation:
      "Amazon Rekognition provides pre-built computer vision capabilities using machine learning.",
  },

  // Migration & Deployment
  {
    question: "Which AWS service helps migrate databases to AWS?",
    options: [
      "AWS DataSync",
      "AWS Database Migration Service",
      "AWS Storage Gateway",
      "AWS Transfer Family",
    ],
    correct: 1,
    explanation:
      "AWS Database Migration Service helps migrate databases to AWS quickly and securely.",
  },
  {
    question: "What is AWS Elastic Beanstalk?",
    options: [
      "A container service",
      "A platform for deploying web applications",
      "A database service",
      "A monitoring service",
    ],
    correct: 1,
    explanation:
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications.",
  },
  {
    question: "Which service helps you migrate large amounts of data to AWS?",
    options: [
      "AWS Snowball",
      "AWS Direct Connect",
      "Amazon S3",
      "AWS DataSync",
    ],
    correct: 0,
    explanation:
      "AWS Snowball is a data transport solution using secure devices to transfer large amounts of data into and out of AWS.",
  },
  {
    question:
      "What is database replication commonly used for in migration strategies?",
    options: [
      "To backup data only",
      "To maintain data synchronization between source and target databases during migration",
      "To reduce database size",
      "To improve query performance",
    ],
    correct: 1,
    explanation:
      "Database replication maintains data synchronization between the source (on-premises) and target (AWS) databases during migration, enabling minimal downtime cutover and ensuring data consistency.",
  },
  {
    question:
      "Which AWS Snow Family device is best suited for edge computing and local data processing?",
    options: [
      "AWS Snowball",
      "AWS Snowball Edge",
      "AWS Snowmobile",
      "AWS SnowCone",
    ],
    correct: 1,
    explanation:
      "AWS Snowball Edge provides both data migration capabilities and edge computing functions, allowing you to run applications locally and process data before sending it to AWS.",
  },
  {
    question:
      "What is a key migration benefit of using AWS managed services instead of self-managed services?",
    options: [
      "Higher costs but better performance",
      "Reduced operational overhead and automatic patching",
      "Less security features",
      "Vendor lock-in advantages",
    ],
    correct: 1,
    explanation:
      "AWS managed services (like RDS, ECS, DynamoDB) reduce operational overhead by handling patching, scaling, backups, and maintenance automatically, allowing teams to focus on applications rather than infrastructure management.",
  },
  {
    question: "What is AWS CodeDeploy?",
    options: [
      "A source control service",
      "A deployment service",
      "A build service",
      "A testing service",
    ],
    correct: 1,
    explanation:
      "AWS CodeDeploy is a deployment service that automates application deployments to various compute services.",
  },
  {
    question: "Which AWS service provides container orchestration?",
    options: ["AWS Lambda", "Amazon ECS", "Amazon EC2", "AWS Batch"],
    correct: 1,
    explanation:
      "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service.",
  },

  // Global Infrastructure
  {
    question:
      "What is the primary benefit of using multiple AWS Availability Zones?",
    options: [
      "Lower costs",
      "Better performance",
      "High availability and fault tolerance",
      "Easier management",
    ],
    correct: 2,
    explanation:
      "Using multiple Availability Zones provides high availability and fault tolerance by distributing applications.",
  },
  {
    question: "What is an AWS Region?",
    options: [
      "A single data center",
      "A cluster of Availability Zones",
      "A billing unit",
      "A service category",
    ],
    correct: 1,
    explanation:
      "An AWS Region is a physical location with multiple Availability Zones that are isolated from failures.",
  },
  {
    question:
      "How many Availability Zones does each AWS Region have at minimum?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation:
      "Each AWS Region consists of a minimum of three Availability Zones, with some having more.",
  },
  {
    question: "What is an Edge Location?",
    options: [
      "A small AWS data center",
      "A CloudFront cache location",
      "A customer data center",
      "A backup facility",
    ],
    correct: 1,
    explanation:
      "Edge Locations are sites that CloudFront uses to cache copies of content for faster delivery to users.",
  },
  {
    question: "Which factor should be considered when choosing an AWS Region?",
    options: [
      "Data sovereignty and compliance",
      "Latency to end users",
      "Service availability",
      "All of the above",
    ],
    correct: 3,
    explanation:
      "When choosing an AWS Region, consider data sovereignty, latency, service availability, and costs.",
  },
  {
    question: "What is the primary purpose of AWS Local Zones?",
    options: [
      "To provide backup storage",
      "To bring AWS services closer to end users in specific geographic areas",
      "To reduce AWS costs",
      "To increase global availability",
    ],
    correct: 1,
    explanation:
      "AWS Local Zones bring AWS compute, storage, database, and other services closer to end users in specific geographic locations to provide single-digit millisecond latency for latency-sensitive applications.",
  },
  {
    question: "What type of applications benefit MOST from AWS Wavelength?",
    options: [
      "Batch processing applications",
      "Ultra-low latency applications for mobile and connected devices",
      "Data warehousing applications",
      "Static website hosting",
    ],
    correct: 1,
    explanation:
      "AWS Wavelength brings AWS services to the edge of 5G networks, providing ultra-low latency for mobile applications, AR/VR, IoT, and machine learning applications that require real-time responsiveness.",
  },
  {
    question: "How do AWS Local Zones differ from standard Availability Zones?",
    options: [
      "Local Zones are cheaper",
      "Local Zones provide ultra-low latency by placing infrastructure closer to specific populations",
      "Local Zones have more services available",
      "Local Zones are only for government use",
    ],
    correct: 1,
    explanation:
      "AWS Local Zones are designed to bring AWS infrastructure and services closer to large population centers, metropolitan areas, and specific geographic locations to provide single-digit millisecond latency that standard Availability Zones cannot achieve.",
  },

  // Auto Scaling & Load Balancing
  {
    question: "What is the primary benefit of AWS Auto Scaling?",
    options: [
      "Reduces costs by shutting down unused resources",
      "Automatically adjusts capacity to maintain steady performance",
      "Provides backup and recovery",
      "Encrypts data at rest",
    ],
    correct: 1,
    explanation:
      "AWS Auto Scaling automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
  },
  {
    question:
      "Which AWS service distributes incoming traffic across multiple targets?",
    options: [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "Amazon CloudFront",
      "AWS Direct Connect",
    ],
    correct: 1,
    explanation:
      "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets.",
  },
  {
    question: "What are the three types of load balancers offered by AWS?",
    options: [
      "Network, Application, Gateway",
      "Classic, Application, Network",
      "Internal, External, Global",
      "Basic, Standard, Premium",
    ],
    correct: 1,
    explanation:
      "AWS offers three types of load balancers: Classic Load Balancer, Application Load Balancer, and Network Load Balancer.",
  },
  {
    question: "What is a Launch Template in AWS?",
    options: [
      "A billing template",
      "A template for launching EC2 instances",
      "A CloudFormation template",
      "A monitoring template",
    ],
    correct: 1,
    explanation:
      "A Launch Template is a template that contains configuration information for launching EC2 instances.",
  },
  {
    question: "Which AWS service automatically replaces unhealthy instances?",
    options: [
      "AWS Lambda",
      "Auto Scaling Groups",
      "Elastic Load Balancing",
      "Amazon CloudWatch",
    ],
    correct: 1,
    explanation:
      "Auto Scaling Groups automatically replace unhealthy instances to maintain the desired capacity.",
  },

  // Support & Compliance
  {
    question:
      "Which AWS support plan provides 24/7 access to Cloud Support Engineers?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: 2,
    explanation:
      "The Business support plan provides 24/7 access to Cloud Support Engineers via phone, email, and chat.",
  },
  {
    question: "What is AWS Trusted Advisor?",
    options: [
      "A monitoring service",
      "A cost optimization tool that provides recommendations",
      "A security service",
      "A backup service",
    ],
    correct: 1,
    explanation:
      "AWS Trusted Advisor provides recommendations to help optimize costs, increase performance, and improve security.",
  },
  {
    question:
      "Which compliance program ensures AWS meets healthcare data requirements?",
    options: ["SOC 2", "HIPAA", "PCI DSS", "ISO 27001"],
    correct: 1,
    explanation:
      "HIPAA (Health Insurance Portability and Accountability Act) ensures AWS meets healthcare data protection requirements.",
  },
  {
    question: "What does AWS Artifact provide?",
    options: [
      "Application deployment",
      "On-demand access to compliance reports and agreements",
      "Cost analysis",
      "Performance monitoring",
    ],
    correct: 1,
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports (like SOC reports, PCI compliance documentation) and online agreements to help with compliance audits and assessments.",
  },
  {
    question: "Which compliance documents can you access through AWS Artifact?",
    options: [
      "Only internal AWS documentation",
      "SOC reports, PCI DSS documentation, and ISO certifications",
      "Customer usage reports",
      "Performance benchmarks",
    ],
    correct: 1,
    explanation:
      "AWS Artifact provides access to important compliance documents including SOC (Service Organization Control) reports, PCI DSS documentation, ISO certifications, and other third-party audit reports.",
  },
  {
    question: "How does AWS Artifact help with compliance audits?",
    options: [
      "It automatically makes your applications compliant",
      "It provides self-service access to compliance documentation for auditors",
      "It performs compliance testing on your behalf",
      "It modifies your infrastructure to meet compliance",
    ],
    correct: 1,
    explanation:
      "AWS Artifact enables self-service access to compliance reports and documentation that customers need for their compliance audits and regulatory requirements, without requiring manual requests to AWS.",
  },
  {
    question:
      "Which AWS program helps startups with credits and technical support?",
    options: [
      "AWS Educate",
      "AWS Activate",
      "AWS Credits",
      "AWS Partner Network",
    ],
    correct: 1,
    explanation:
      "AWS Activate provides startups with resources including AWS credits, technical support, and training.",
  },

  // Additional Core Services
  {
    question: "What is Amazon WorkSpaces?",
    options: [
      "A collaboration platform",
      "A virtual desktop service",
      "A file sharing service",
      "A video conferencing service",
    ],
    correct: 1,
    explanation:
      "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution running on AWS.",
  },
  {
    question: "Which AWS service provides managed Microsoft Active Directory?",
    options: ["AWS IAM", "AWS Directory Service", "Amazon Cognito", "AWS SSO"],
    correct: 1,
    explanation:
      "AWS Directory Service provides managed Microsoft Active Directory in the AWS Cloud.",
  },
  {
    question: "What is AWS Organizations used for?",
    options: [
      "Centrally managing and governing multiple AWS accounts",
      "Organizing S3 buckets",
      "Managing IAM users",
      "Organizing EC2 instances",
    ],
    correct: 0,
    explanation:
      "AWS Organizations helps you centrally manage and govern multiple AWS accounts, enabling consolidated billing, account creation, and policy-based management across an organization.",
  },
  {
    question: "What is consolidated billing in AWS Organizations?",
    options: [
      "Separate bills for each account",
      "Combined billing across multiple AWS accounts with potential volume discounts",
      "Monthly payment plans",
      "Automatic bill payment",
    ],
    correct: 1,
    explanation:
      "Consolidated billing combines usage across all accounts in an organization into a single bill, potentially providing volume discounts and simplifying billing management for multiple AWS accounts.",
  },
  {
    question: "What are cost allocation tags used for in AWS?",
    options: [
      "Improving performance",
      "Organizing and tracking AWS costs by categorizing resources",
      "Enhancing security",
      "Monitoring network traffic",
    ],
    correct: 1,
    explanation:
      "Cost allocation tags allow you to organize and track AWS costs by categorizing resources (like department, project, or environment), enabling detailed cost reporting and budget allocation across different business units.",
  },
  {
    question: "How do AWS Organizations help with volume discounts?",
    options: [
      "They provide automatic discounts",
      "Usage from all member accounts is combined for volume pricing tiers",
      "They negotiate lower rates",
      "They provide free services",
    ],
    correct: 1,
    explanation:
      "AWS Organizations consolidate usage across all member accounts, which can help organizations reach higher volume pricing tiers more quickly and benefit from volume discounts that might not be available to individual accounts.",
  },
  {
    question:
      "Which AWS service helps you create isolated network environments?",
    options: ["AWS Shield", "Amazon VPC", "AWS WAF", "AWS Direct Connect"],
    correct: 1,
    explanation:
      "Amazon VPC enables you to launch AWS resources in a logically isolated virtual network.",
  },
  {
    question: "What is the AWS Command Line Interface (CLI) used for?",
    options: [
      "Web development",
      "Managing AWS services from command line",
      "Database queries",
      "Network monitoring",
    ],
    correct: 1,
    explanation:
      "The AWS CLI is a unified tool for managing AWS services from the command line interface.",
  },

  // DevOps & Development Tools
  {
    question: "Which AWS service provides source code management?",
    options: [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "AWS CodePipeline",
    ],
    correct: 1,
    explanation:
      "AWS CodeCommit is a fully managed source control service that hosts secure Git repositories.",
  },
  {
    question: "What is AWS CodeBuild?",
    options: [
      "A deployment service",
      "A build service",
      "A source control service",
      "A testing service",
    ],
    correct: 1,
    explanation:
      "AWS CodeBuild is a fully managed continuous integration service that compiles source code and runs tests.",
  },
  {
    question: "Which service creates CI/CD pipelines in AWS?",
    options: [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodePipeline",
      "AWS CodeDeploy",
    ],
    correct: 2,
    explanation:
      "AWS CodePipeline is a fully managed continuous delivery service for fast and reliable application updates.",
  },
  {
    question: "What is Amazon ECR?",
    options: [
      "A container registry",
      "A container orchestration service",
      "A serverless compute service",
      "A monitoring service",
    ],
    correct: 0,
    explanation:
      "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry.",
  },
  {
    question: "Which AWS service is used for infrastructure as code?",
    options: [
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "AWS Systems Manager",
      "AWS Config",
    ],
    correct: 1,
    explanation:
      "AWS CloudFormation provides infrastructure as code capabilities for modeling and provisioning resources.",
  },

  // Security Services
  {
    question: "What is AWS Shield?",
    options: [
      "A firewall service",
      "A DDoS protection service",
      "An identity service",
      "A key management service",
    ],
    correct: 1,
    explanation:
      "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service.",
  },
  {
    question:
      "Which AWS service provides web application firewall capabilities?",
    options: ["AWS Shield", "AWS WAF", "AWS GuardDuty", "AWS Inspector"],
    correct: 1,
    explanation:
      "AWS WAF is a web application firewall that helps protect web applications from common web exploits.",
  },
  {
    question: "What does Amazon Inspector do?",
    options: [
      "Monitors network traffic",
      "Assesses application security vulnerabilities",
      "Manages encryption keys",
      "Provides identity federation",
    ],
    correct: 1,
    explanation:
      "Amazon Inspector is an automated security assessment service for applications to improve security and compliance.",
  },
  {
    question:
      "Which AWS service provides threat detection using machine learning?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield", "AWS Inspector"],
    correct: 1,
    explanation:
      "Amazon GuardDuty is a threat detection service that uses machine learning and threat intelligence.",
  },
  {
    question: "What is AWS Secrets Manager used for?",
    options: [
      "Managing API keys and passwords",
      "Network security",
      "Data encryption",
      "User authentication",
    ],
    correct: 0,
    explanation:
      "AWS Secrets Manager helps protect secrets needed to access applications, services, and IT resources.",
  },

  // Additional Core Services - Compute
  {
    question:
      "Which AWS service allows you to run containerized applications without managing servers?",
    options: ["Amazon ECS with EC2", "AWS Fargate", "Amazon EKS", "AWS Lambda"],
    correct: 1,
    explanation:
      "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and EKS, removing the need to provision and manage servers.",
  },
  {
    question: "What is the maximum execution time for an AWS Lambda function?",
    options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
    correct: 2,
    explanation:
      "AWS Lambda functions can run for a maximum of 15 minutes (900 seconds) before timing out.",
  },
  {
    question:
      "Which AWS service provides scalable virtual desktop infrastructure?",
    options: [
      "Amazon WorkSpaces",
      "Amazon AppStream 2.0",
      "AWS WorkLink",
      "Amazon WorkDocs",
    ],
    correct: 0,
    explanation:
      "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution that provides cloud-based virtual desktops.",
  },
  {
    question: "What is AWS Batch used for?",
    options: [
      "Streaming data processing",
      "Running batch computing workloads",
      "Real-time analytics",
      "Container orchestration",
    ],
    correct: 1,
    explanation:
      "AWS Batch enables developers to easily and efficiently run hundreds to thousands of batch computing jobs on AWS.",
  },

  // Storage Services - Advanced
  {
    question: "Which AWS service provides a hybrid cloud storage solution?",
    options: [
      "AWS DataSync",
      "AWS Storage Gateway",
      "AWS Snowball",
      "Amazon EFS",
    ],
    correct: 1,
    explanation:
      "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments to AWS cloud storage services.",
  },
  {
    question: "What is the minimum storage size for Amazon EBS gp3 volumes?",
    options: ["1 GB", "1 GiB", "10 GiB", "20 GiB"],
    correct: 1,
    explanation:
      "Amazon EBS gp3 volumes can be created with a minimum size of 1 GiB and can scale up to 16 TiB.",
  },
  {
    question:
      "Which S3 storage class automatically moves objects between access tiers?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Glacier",
      "S3 One Zone-IA",
    ],
    correct: 1,
    explanation:
      "S3 Intelligent-Tiering automatically moves objects between two access tiers when access patterns change, optimizing costs.",
  },
  {
    question: "What is the data transfer speed of AWS Snowball Edge?",
    options: [
      "Up to 100 TB",
      "Up to 80 TB",
      "Up to 100 TB in 10 days",
      "1 TB per day",
    ],
    correct: 2,
    explanation:
      "AWS Snowball Edge can transfer up to 100 TB of data and typically takes about 10 days for the entire process including shipping.",
  },

  // Networking - Advanced
  {
    question: "What is the maximum number of VPCs per AWS region by default?",
    options: ["5", "10", "20", "100"],
    correct: 0,
    explanation:
      "By default, you can create up to 5 VPCs per AWS region, though this limit can be increased by contacting AWS support.",
  },
  {
    question:
      "Which AWS service helps establish a dedicated network connection from on-premises to AWS?",
    options: [
      "VPC Peering",
      "AWS Direct Connect",
      "VPN Gateway",
      "Internet Gateway",
    ],
    correct: 1,
    explanation:
      "AWS Direct Connect provides a dedicated network connection from your premises to AWS, bypassing the internet for better performance and security.",
  },
  {
    question: "What is AWS Transit Gateway used for?",
    options: [
      "Load balancing",
      "Connecting multiple VPCs and on-premises networks",
      "DNS resolution",
      "Content delivery",
    ],
    correct: 1,
    explanation:
      "AWS Transit Gateway acts as a hub that controls how traffic is routed among all connected networks, which act like spokes.",
  },
  {
    question:
      "Which AWS service provides DDoS protection at the network and transport layers?",
    options: [
      "AWS WAF",
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "Amazon GuardDuty",
    ],
    correct: 1,
    explanation:
      "AWS Shield Standard provides protection against most common, frequently occurring network and transport layer DDoS attacks.",
  },

  // Database Services - Advanced
  {
    question: "What is the read replica limit for Amazon RDS MySQL?",
    options: ["5", "10", "15", "20"],
    correct: 2,
    explanation:
      "Amazon RDS for MySQL supports up to 15 read replicas for improved read performance and availability.",
  },
  {
    question: "Which AWS database service is best for graph databases?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Neptune",
      "Amazon Redshift",
    ],
    correct: 2,
    explanation:
      "Amazon Neptune is a fully managed graph database service that supports both Property Graph and RDF graph models.",
  },
  {
    question: "What is Amazon DynamoDB Accelerator (DAX)?",
    options: [
      "A backup service",
      "An in-memory cache",
      "A migration tool",
      "A monitoring service",
    ],
    correct: 1,
    explanation:
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, in-memory cache for DynamoDB that provides microsecond latency.",
  },
  {
    question:
      "Which RDS database engine supports cross-region automated backups?",
    options: [
      "MySQL only",
      "All RDS engines",
      "PostgreSQL only",
      "Oracle only",
    ],
    correct: 1,
    explanation:
      "All Amazon RDS database engines support cross-region automated backups for disaster recovery and compliance requirements.",
  },

  // Security - Advanced
  {
    question:
      "What is the maximum number of security groups per VPC by default?",
    options: ["100", "200", "500", "2500"],
    correct: 3,
    explanation:
      "By default, you can create up to 2,500 security groups per VPC, with each security group supporting up to 60 inbound and 60 outbound rules.",
  },
  {
    question: "Which AWS service helps you manage SSL/TLS certificates?",
    options: [
      "AWS KMS",
      "AWS Certificate Manager",
      "AWS Secrets Manager",
      "AWS CloudHSM",
    ],
    correct: 1,
    explanation:
      "AWS Certificate Manager (ACM) handles the complexity of creating and managing public SSL/TLS certificates for AWS-based websites and applications.",
  },
  {
    question: "What is AWS CloudHSM used for?",
    options: [
      "DNS management",
      "Hardware security modules",
      "Content delivery",
      "Load balancing",
    ],
    correct: 1,
    explanation:
      "AWS CloudHSM provides hardware security modules in the AWS Cloud for generating, storing, and managing cryptographic keys.",
  },
  {
    question:
      "Which AWS service provides security assessment and vulnerability management?",
    options: ["AWS Config", "Amazon Inspector", "AWS CloudTrail", "AWS X-Ray"],
    correct: 1,
    explanation:
      "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.",
  },

  // Machine Learning & AI
  {
    question:
      "Which AWS service provides natural language processing capabilities?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Polly",
      "Amazon Lex",
    ],
    correct: 1,
    explanation:
      "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text.",
  },
  {
    question: "What is Amazon Polly used for?",
    options: [
      "Image recognition",
      "Text-to-speech",
      "Speech-to-text",
      "Language translation",
    ],
    correct: 1,
    explanation:
      "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk.",
  },
  {
    question: "Which AWS service provides automatic speech recognition?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Lex",
    ],
    correct: 1,
    explanation:
      "Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy to convert speech to text.",
  },
  {
    question: "What is Amazon Forecast used for?",
    options: [
      "Weather prediction",
      "Time-series forecasting",
      "Image analysis",
      "Text processing",
    ],
    correct: 1,
    explanation:
      "Amazon Forecast is a fully managed service that uses machine learning to deliver highly accurate forecasts for time-series data.",
  },
  {
    question: "What is Amazon Kendra used for?",
    options: [
      "Image recognition",
      "Intelligent document search using natural language",
      "Speech-to-text conversion",
      "Video analysis",
    ],
    correct: 1,
    explanation:
      "Amazon Kendra is an intelligent search service powered by machine learning that allows users to search across documents and content using natural language queries.",
  },
  {
    question:
      "Which AWS service can extract text and data from documents and forms?",
    options: [
      "Amazon Polly",
      "Amazon Textract",
      "Amazon Transcribe",
      "Amazon Comprehend",
    ],
    correct: 1,
    explanation:
      "Amazon Textract uses machine learning to automatically extract text, handwriting, and data from scanned documents, going beyond simple optical character recognition (OCR) to identify and extract data from forms and tables.",
  },
  {
    question: "What is Amazon Translate used for?",
    options: [
      "Converting speech to text",
      "Language translation using neural machine translation",
      "Image recognition",
      "Data encryption",
    ],
    correct: 1,
    explanation:
      "Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation between different languages.",
  },

  // Analytics & Big Data
  {
    question: "What is the maximum size of a single Amazon Redshift cluster?",
    options: ["2 PB", "8 PB", "16 PB", "No limit"],
    correct: 1,
    explanation:
      "Amazon Redshift clusters can scale up to 8 PB of compressed SSD storage using RA3 node types with managed storage.",
  },
  {
    question: "Which AWS service is used for real-time stream processing?",
    options: [
      "Amazon Kinesis Data Analytics",
      "Amazon EMR",
      "AWS Glue",
      "Amazon Athena",
    ],
    correct: 0,
    explanation:
      "Amazon Kinesis Data Analytics is used for processing and analyzing streaming data in real-time using SQL or Apache Flink.",
  },
  {
    question: "What is AWS Lake Formation used for?",
    options: [
      "Creating data warehouses",
      "Building data lakes",
      "Real-time analytics",
      "Data backup",
    ],
    correct: 1,
    explanation:
      "AWS Lake Formation makes it easy to set up a secure data lake in days, centralizing data from databases, object storage, and streaming sources.",
  },
  {
    question: "Which service allows you to query data in S3 using SQL?",
    options: ["Amazon Redshift", "Amazon Athena", "Amazon EMR", "AWS Glue"],
    correct: 1,
    explanation:
      "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL.",
  },

  // Cost Management & Billing
  {
    question: "What is the AWS Free Tier usage limit for Amazon S3?",
    options: ["5 GB", "15 GB", "25 GB", "50 GB"],
    correct: 0,
    explanation:
      "The AWS Free Tier includes 5 GB of Amazon S3 standard storage for 12 months with 20,000 get requests and 2,000 put requests.",
  },
  {
    question: "Which AWS service helps you set up budget alerts?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Dashboard",
      "AWS Cost and Usage Report",
    ],
    correct: 1,
    explanation:
      "AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.",
  },
  {
    question:
      "What is the savings percentage for 3-year Reserved Instances compared to On-Demand?",
    options: ["Up to 50%", "Up to 60%", "Up to 72%", "Up to 90%"],
    correct: 2,
    explanation:
      "3-year Reserved Instances can provide up to 72% savings compared to On-Demand pricing, depending on the instance type and payment option.",
  },
  {
    question:
      "Which pricing model offers the highest potential savings but with interruption risk?",
    options: [
      "On-Demand",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts",
    ],
    correct: 2,
    explanation:
      "Spot Instances can offer up to 90% savings compared to On-Demand pricing but can be interrupted when AWS needs the capacity back.",
  },

  // Management & Governance
  {
    question: "What is AWS Service Catalog used for?",
    options: [
      "Cost tracking",
      "Service governance and compliance",
      "Performance monitoring",
      "Security scanning",
    ],
    correct: 1,
    explanation:
      "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS.",
  },
  {
    question: "Which AWS service provides resource-level permissions?",
    options: [
      "AWS Organizations",
      "AWS IAM",
      "AWS Config",
      "AWS CloudFormation",
    ],
    correct: 1,
    explanation:
      "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely with fine-grained permissions.",
  },
  {
    question: "What is AWS Personal Health Dashboard?",
    options: [
      "Health monitoring for EC2",
      "Account-specific AWS service health information",
      "Application performance monitoring",
      "Cost optimization recommendations",
    ],
    correct: 1,
    explanation:
      "AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact your AWS resources.",
  },
  {
    question: "Which service helps you track API calls made to AWS services?",
    options: ["AWS Config", "AWS CloudTrail", "Amazon CloudWatch", "AWS X-Ray"],
    correct: 1,
    explanation:
      "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing by logging API calls.",
  },

  // Application Integration
  {
    question: "What is the maximum retention period for Amazon SQS messages?",
    options: ["7 days", "14 days", "30 days", "1 year"],
    correct: 1,
    explanation:
      "Amazon SQS can retain messages for up to 14 days, with the default retention period being 4 days.",
  },
  {
    question: "Which AWS service is used for workflow orchestration?",
    options: [
      "AWS Step Functions",
      "Amazon SWF",
      "AWS Batch",
      "Amazon EventBridge",
    ],
    correct: 0,
    explanation:
      "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows so you can build and update apps quickly.",
  },
  {
    question: "What is Amazon EventBridge used for?",
    options: [
      "Load balancing",
      "Event-driven architecture",
      "Data transformation",
      "File synchronization",
    ],
    correct: 1,
    explanation:
      "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, SaaS applications, and AWS services.",
  },
  {
    question: "Which service provides publish-subscribe messaging?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon MQ"],
    correct: 1,
    explanation:
      "Amazon Simple Notification Service (SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.",
  },

  // Edge & Content Delivery
  {
    question: "How many edge locations does Amazon CloudFront have globally?",
    options: ["Over 100", "Over 200", "Over 400", "Over 500"],
    correct: 2,
    explanation:
      "Amazon CloudFront has over 400+ points of presence (edge locations and regional edge caches) in 90+ cities across 40+ countries.",
  },
  {
    question: "What is AWS Global Accelerator used for?",
    options: [
      "Content caching",
      "Improving application performance",
      "Load balancing",
      "DNS resolution",
    ],
    correct: 1,
    explanation:
      "AWS Global Accelerator improves the performance of your applications for local and global users by routing traffic through AWS's global network infrastructure.",
  },
  {
    question: "Which AWS service helps optimize last-mile delivery of content?",
    options: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Elastic Load Balancing",
    ],
    correct: 1,
    explanation:
      "Amazon CloudFront optimizes last-mile delivery by caching content at edge locations closer to end users.",
  },
  {
    question:
      "What is the difference between CloudFront and Global Accelerator?",
    options: [
      "No difference",
      "CloudFront caches content, Global Accelerator improves network performance",
      "Global Accelerator is cheaper",
      "CloudFront only works with S3",
    ],
    correct: 1,
    explanation:
      "CloudFront caches cacheable content at edge locations, while Global Accelerator improves performance for both cacheable and non-cacheable content by using AWS's global network.",
  },

  // Disaster Recovery & Backup
  {
    question:
      "What is the Recovery Time Objective (RTO) for Multi-AZ RDS deployments?",
    options: ["1-2 minutes", "5-10 minutes", "30 minutes", "1 hour"],
    correct: 0,
    explanation:
      "Multi-AZ RDS deployments typically have an RTO of 1-2 minutes for automatic failover to the standby instance.",
  },
  {
    question: "Which AWS service provides automated backup for EC2 instances?",
    options: [
      "AWS Backup",
      "Amazon EBS Snapshots",
      "AWS Storage Gateway",
      "AWS DataSync",
    ],
    correct: 0,
    explanation:
      "AWS Backup is a centralized backup service that automatically backs up data across AWS services including EC2, EBS, RDS, and more.",
  },
  {
    question: "What is the minimum frequency for automated RDS backups?",
    options: ["Every hour", "Every 8 hours", "Daily", "Weekly"],
    correct: 2,
    explanation:
      "RDS automated backups occur daily during the preferred backup window, with a backup retention period of 1-35 days.",
  },
  {
    question: "Which disaster recovery strategy has the lowest RTO?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active/active",
    ],
    correct: 3,
    explanation:
      "Multi-site active/active has the lowest RTO as traffic is already being served from multiple sites, allowing near-instantaneous failover.",
  },

  // Compliance & Governance
  {
    question:
      "Which compliance standard is required for payment card industry?",
    options: ["SOC 2", "HIPAA", "PCI DSS", "FedRAMP"],
    correct: 2,
    explanation:
      "PCI DSS (Payment Card Industry Data Security Standard) is required for organizations that handle credit card transactions.",
  },
  {
    question: "What is AWS Artifact primarily used for?",
    options: [
      "Cost reporting",
      "Compliance documentation",
      "Performance monitoring",
      "Security scanning",
    ],
    correct: 1,
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance documentation and AWS agreements such as SOC reports, PCI documents, and ISO certifications.",
  },
  {
    question:
      "Which AWS service helps ensure resource compliance with organizational policies?",
    options: ["AWS Config", "AWS CloudTrail", "AWS IAM", "AWS Organizations"],
    correct: 0,
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations and allows you to automate compliance checking against desired configurations.",
  },
  {
    question: "What is AWS Control Tower used for?",
    options: [
      "Cost management",
      "Multi-account governance",
      "Performance optimization",
      "Security monitoring",
    ],
    correct: 1,
    explanation:
      "AWS Control Tower provides a single location to set up your multi-account AWS environment and govern your AWS workloads with rules for security, operations, and compliance.",
  },

  // Support & Professional Services
  {
    question: "Which support plan includes access to AWS Support API?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: 2,
    explanation:
      "The Business and Enterprise support plans include access to the AWS Support API for programmatic case management.",
  },
  {
    question:
      "What is the response time for production system down issues in Enterprise support?",
    options: ["15 minutes", "30 minutes", "1 hour", "4 hours"],
    correct: 0,
    explanation:
      "Enterprise support provides a 15-minute response time for production system down issues (critical business impact).",
  },
  {
    question:
      "Which AWS service provides architectural guidance and best practices?",
    options: [
      "AWS Well-Architected Tool",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Inspector",
    ],
    correct: 0,
    explanation:
      "The AWS Well-Architected Tool helps you review your architectures against AWS best practices and provides guidance for improvement.",
  },
  {
    question: "What is included in AWS Basic Support?",
    options: [
      "24/7 phone support",
      "Technical support cases",
      "Access to forums, documentation, and AWS Personal Health Dashboard",
      "Dedicated support team",
    ],
    correct: 2,
    explanation:
      "AWS Basic Support includes access to customer service, documentation, whitepapers, support forums, AWS Personal Health Dashboard, and basic AWS Trusted Advisor checks at no additional cost.",
  },
  {
    question:
      "Which AWS support plan provides access to AWS Trusted Advisor with all checks?",
    options: [
      "Basic",
      "Developer",
      "Business and Enterprise plans",
      "All support plans",
    ],
    correct: 2,
    explanation:
      "Only Business and Enterprise support plans provide access to the full set of AWS Trusted Advisor checks. Basic and Developer plans have access to a limited set of core checks.",
  },
  {
    question:
      "What is the primary difference between AWS Business Support and AWS Enterprise Support?",
    options: [
      "Response times only",
      "Enterprise includes Technical Account Manager and faster response times",
      "Price only",
      "Enterprise is for government customers only",
    ],
    correct: 1,
    explanation:
      "AWS Enterprise Support includes a dedicated Technical Account Manager (TAM), faster response times (15 minutes for critical issues), infrastructure event management, and additional architectural guidance beyond what Business Support provides.",
  },

  // Migration & Transfer
  {
    question: "Which AWS service helps migrate on-premises file shares to AWS?",
    options: [
      "AWS DataSync",
      "AWS Storage Gateway",
      "AWS Server Migration Service",
      "AWS Application Discovery Service",
    ],
    correct: 0,
    explanation:
      "AWS DataSync makes it simple and fast to move large amounts of data online between on-premises storage and Amazon S3, EFS, or FSx.",
  },
  {
    question: "What is AWS Application Migration Service used for?",
    options: [
      "Database migration",
      "Lift-and-shift migration",
      "Code refactoring",
      "Cost optimization",
    ],
    correct: 1,
    explanation:
      "AWS Application Migration Service (AWS MGN) simplifies and expedites migration from physical, virtual, and cloud-based servers to AWS with minimal downtime.",
  },
  {
    question:
      "Which service helps discover on-premises applications before migration?",
    options: [
      "AWS Migration Hub",
      "AWS Application Discovery Service",
      "AWS Server Migration Service",
      "AWS DataSync",
    ],
    correct: 1,
    explanation:
      "AWS Application Discovery Service helps enterprise customers plan migration projects by gathering information about their on-premises data centers.",
  },
  {
    question: "What is the maximum data transfer capacity of AWS Snowmobile?",
    options: ["80 TB", "100 TB", "100 PB", "1 EB"],
    correct: 2,
    explanation:
      "AWS Snowmobile is an exabyte-scale data transfer service with up to 100 PB of storage capacity per Snowmobile truck.",
  },

  // DevOps & Developer Tools
  {
    question: "Which AWS service provides infrastructure as code templates?",
    options: [
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "AWS CodeBuild",
      "AWS Systems Manager",
    ],
    correct: 1,
    explanation:
      "AWS CloudFormation provides a common language for you to model and provision AWS and third-party application resources using templates.",
  },
  {
    question: "What is AWS CodeStar used for?",
    options: [
      "Code compilation",
      "Project management and CI/CD",
      "Code repository",
      "Performance monitoring",
    ],
    correct: 1,
    explanation:
      "AWS CodeStar enables you to quickly develop, build, and deploy applications on AWS by providing a unified user interface and project templates.",
  },
  {
    question: "Which service provides managed Apache Kafka?",
    options: [
      "Amazon Kinesis",
      "Amazon MQ",
      "Amazon MSK",
      "Amazon EventBridge",
    ],
    correct: 2,
    explanation:
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK) is a fully managed service that makes it easy to build and run applications that use Apache Kafka.",
  },
  {
    question: "What is AWS X-Ray used for?",
    options: [
      "Cost analysis",
      "Application performance monitoring",
      "Security scanning",
      "Backup management",
    ],
    correct: 1,
    explanation:
      "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture.",
  },

  // Containers & Orchestration
  {
    question: "Which AWS service provides managed Kubernetes?",
    options: ["Amazon ECS", "AWS Fargate", "Amazon EKS", "AWS Batch"],
    correct: 2,
    explanation:
      "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS.",
  },
  {
    question: "What is the maximum number of tasks per ECS service?",
    options: ["1,000", "5,000", "10,000", "No limit"],
    correct: 3,
    explanation:
      "There is no hard limit on the number of tasks per ECS service, though there are account limits on total running tasks that can be increased.",
  },
  {
    question: "Which container registry service is provided by AWS?",
    options: [
      "Docker Hub",
      "Amazon ECR",
      "Google Container Registry",
      "Azure Container Registry",
    ],
    correct: 1,
    explanation:
      "Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images.",
  },
  {
    question: "What is AWS App Runner used for?",
    options: [
      "Container orchestration",
      "Serverless container deployment",
      "Database management",
      "File storage",
    ],
    correct: 1,
    explanation:
      "AWS App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs at scale.",
  },
  {
    question: "What is AWS Outposts used for?",
    options: [
      "Content delivery",
      "Bringing AWS infrastructure and services to on-premises facilities",
      "Database backup",
      "Network monitoring",
    ],
    correct: 1,
    explanation:
      "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility for a truly consistent hybrid experience.",
  },
  {
    question:
      "Which AWS service provides a fully managed Apache Kafka service?",
    options: [
      "Amazon Kinesis",
      "Amazon MSK (Managed Streaming for Apache Kafka)",
      "Amazon SQS",
      "Amazon EventBridge",
    ],
    correct: 1,
    explanation:
      "Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data.",
  },

  // Internet of Things (IoT)
  {
    question: "Which AWS service provides IoT device management?",
    options: [
      "AWS IoT Core",
      "AWS IoT Device Management",
      "AWS IoT Analytics",
      "AWS IoT Greengrass",
    ],
    correct: 1,
    explanation:
      "AWS IoT Device Management makes it easy to securely register, organize, monitor, and remotely manage IoT devices at scale.",
  },
  {
    question: "What is AWS IoT Greengrass used for?",
    options: [
      "Cloud analytics",
      "Edge computing for IoT",
      "Device registration",
      "Data visualization",
    ],
    correct: 1,
    explanation:
      "AWS IoT Greengrass extends AWS functionality to edge devices so they can act locally on the data they generate while still using the cloud for management, analytics, and durable storage.",
  },
  {
    question: "Which service helps analyze IoT data at scale?",
    options: [
      "AWS IoT Core",
      "AWS IoT Analytics",
      "AWS IoT Device Defender",
      "AWS IoT Events",
    ],
    correct: 1,
    explanation:
      "AWS IoT Analytics is a fully managed service that makes it easy to run and operationalize sophisticated analytics on massive volumes of IoT data.",
  },

  // Additional Pricing & Economics
  {
    question: "What is the AWS pricing model for Lambda functions?",
    options: [
      "Per hour",
      "Per request and compute time",
      "Monthly subscription",
      "Per GB stored",
    ],
    correct: 1,
    explanation:
      "AWS Lambda pricing is based on the number of requests and the duration of code execution, measured in GB-seconds.",
  },
  {
    question: "Which factors affect Amazon S3 pricing?",
    options: [
      "Storage amount only",
      "Storage, requests, and data transfer",
      "Number of buckets",
      "Geographic location only",
    ],
    correct: 1,
    explanation:
      "Amazon S3 pricing is based on storage amount, number and type of requests, data transfer out of S3, and optional features like storage management.",
  },
  {
    question: "What is AWS Savings Plans?",
    options: [
      "A discount program",
      "Flexible pricing model for compute services",
      "Free tier extension",
      "Enterprise support plan",
    ],
    correct: 1,
    explanation:
      "AWS Savings Plans offer significant savings over On-Demand pricing in exchange for a commitment to use a specific amount of compute power for a 1 or 3 year period.",
  },
  {
    question: "Which tool helps optimize AWS costs automatically?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
    ],
    correct: 2,
    explanation:
      "AWS Compute Optimizer recommends optimal AWS compute resources for your workloads to reduce costs and improve performance by using machine learning.",
  },

  // Additional Well-Architected Principles
  {
    question:
      "Which Well-Architected principle focuses on environmental impact?",
    options: [
      "Cost Optimization",
      "Performance Efficiency",
      "Sustainability",
      "Operational Excellence",
    ],
    correct: 2,
    explanation:
      "The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads by understanding their impacts and reducing resource consumption.",
  },
  {
    question: "What is the key principle of the Operational Excellence pillar?",
    options: [
      "Minimize costs",
      "Automate everything",
      "Make frequent, small, reversible changes",
      "Use the latest technology",
    ],
    correct: 2,
    explanation:
      "A key principle of Operational Excellence is to make frequent, small, reversible changes to reduce the scope of failures and enable faster recovery.",
  },
  {
    question: "Which pillar emphasizes 'design for failure'?",
    options: [
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
    ],
    correct: 1,
    explanation:
      "The Reliability pillar emphasizes designing for failure by assuming things will fail and building resilient systems that can handle failures gracefully.",
  },

  // Additional Security Questions
  {
    question: "What is AWS WAF used to protect against?",
    options: [
      "DDoS attacks only",
      "Web application attacks",
      "Network intrusions",
      "Data breaches",
    ],
    correct: 1,
    explanation:
      "AWS WAF (Web Application Firewall) helps protect web applications from common web exploits and bots that may affect availability, compromise security, or consume excessive resources.",
  },
  {
    question: "Which AWS service provides data loss prevention?",
    options: ["Amazon Macie", "AWS GuardDuty", "AWS Inspector", "AWS Config"],
    correct: 0,
    explanation:
      "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data in AWS.",
  },
  {
    question: "What is the purpose of AWS Resource Access Manager (RAM)?",
    options: [
      "Monitor resource usage",
      "Share resources across AWS accounts",
      "Control access permissions",
      "Backup resources",
    ],
    correct: 1,
    explanation:
      "AWS Resource Access Manager (RAM) helps you securely share your resources across AWS accounts within your organization or organizational units.",
  },
];

// Function to shuffle options within a question
const shuffleQuestionOptions = (question: Question): Question => {
  const options = [...question.options];
  const correctAnswer = options[question.correct];

  // Fisher-Yates shuffle algorithm
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  // Find the new index of the correct answer
  const newCorrectIndex = options.findIndex(
    (option) => option === correctAnswer
  );

  return {
    ...question,
    options,
    correct: newCorrectIndex,
  };
};

// Function to select random questions from the bank with shuffled options
export const selectRandomQuestions = (count: number = 20): Question[] => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  // Shuffle options for each question
  return selected.map(shuffleQuestionOptions);
};
