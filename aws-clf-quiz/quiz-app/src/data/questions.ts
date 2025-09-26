import type { Question } from "../types/quiz";

export const questionBank: Question[] = [
  // Core Services
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

  // Well-Architected Framework
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

  // Security & IAM
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
      "The initial user with complete access",
      "A read-only user",
      "A temporary user",
    ],
    correct: 1,
    explanation:
      "The root user is the initial user created with an AWS account that has complete access to all services and resources.",
  },
  {
    question: "Which AWS service provides encryption key management?",
    options: ["AWS IAM", "AWS KMS", "AWS Shield", "AWS WAF"],
    correct: 1,
    explanation:
      "AWS Key Management Service (KMS) is a managed service that makes it easy to create and control encryption keys.",
  },

  // Networking
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

  // Pricing & Billing
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
      "Compliance reports and agreements",
      "Cost analysis",
      "Performance monitoring",
    ],
    correct: 1,
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and online agreements.",
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
      "Managing multiple AWS accounts",
      "Organizing S3 buckets",
      "Managing IAM users",
      "Organizing EC2 instances",
    ],
    correct: 0,
    explanation:
      "AWS Organizations helps you centrally manage and govern multiple AWS accounts.",
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
