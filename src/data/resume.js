const resume = {
  hero: {
    name: 'Payal Ingle',
    title: 'DevOps and Cloud Engineer',
    email: 'payalingle147@gmail.com',
    phone: '+91-7888158609',
    photo: '/payal.jpg',
    resumeUrl: '/Payal_Ingle_Resume.pdf',
    links: {
      linkedin: 'https://www.linkedin.com/in/payalingle/',
      github: 'https://github.com/Payalingle'
    },
    summary:
      'DevOps and Cloud enthusiast with hands-on experience in CI/CD pipelines, AWS, and tooling like Jenkins, Docker, and Terraform. Passionate about secure, scalable cloud solutions.'
  },
  about: {
    heading: 'About Me',
    content: [
      'I am Payal Ingle, a Computer Science graduate and DevOps & Cloud Engineer passionate about architecting scalable, automated, and secure cloud-native solutions. My expertise lies in designing and deploying CI/CD pipelines, implementing Infrastructure as Code (IaC) with Terraform, and orchestrating containerized applications using Docker and Kubernetes (EKS).',
      'I specialize in AWS cloud services (EC2, S3, RDS, IAM, VPC, EKS) and have hands-on experience integrating monitoring and security frameworks such as Prometheus, Grafana, SonarQube, and Trivy to ensure reliability and compliance.',
      'I have successfully delivered projects including: End-to-End DevOps Automation, Cloud-Native Deployments, and AI-Driven Systems. Driven by a strong foundation in Linux, Python, and modern DevOps toolchains, I thrive at the intersection of automation, cloud engineering, and performance optimization.'
    ]
  },
  skills: [
    {
      category: 'Cloud/DevOps',
      items: ['AWS (EC2, S3, RDS, IAM, EKS, VPC)', 'Terraform', 'Docker', 'Jenkins', 'Ansible', 'CI/CD']
    },
    { category: 'Monitoring/Security', items: ['Prometheus', 'Grafana', 'SonarQube', 'Trivy'] },
    {
      category: 'Web/Infra',
      items: ['Python', 'Linux (Ubuntu)', 'Apache', 'Nginx', 'MySQL', 'HTML, CSS, Bootstrap', 'WordPress']
    },
    { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab CI/CD'] },
    { category: 'Operating Systems', items: ['Linux (Ubuntu)', 'Windows'] }
  ],
  experience: [
    {
      role: 'Trainee Software Intern',
      company: 'Soft2Technologies',
      period: 'Oct 2022 – Oct 2023',
      bullets: [
        'Developed responsive web applications using HTML, CSS, and MySQL.',
        'Collaborated with cross-functional teams to design user-centric solutions and reusable UI components.'
      ],
      skills: ['HTML', 'CSS', 'MySQL', 'teamwork', 'problem-solving', 'communication']
    }
  ],
  projects: [
    {
      name: 'Automated Waste Sorting System',
      date: 'Feb 2024',
      details: [
        'Built a machine learning model to classify recyclable vs hazardous waste with 92% accuracy.',
        'Preprocessed large datasets and tuned models for optimal accuracy.'
      ],
      skills: ['Python', 'scikit-learn', 'ML', 'data preprocessing', 'model evaluation'],
      actions: {
        repo: '',
        demo: ''
      }
    },
    {
      name: 'AWS DevOps CI/CD – Amazon Prime Clone',
      date: 'Dec 2024 – Feb 2025',
      details: [
        'Automated deployment with Jenkins, Docker, and EKS on AWS.',
        'Integrated Prometheus, Grafana, SonarQube, and Trivy for monitoring and security.',
        'Reduced manual deployment time by 80% using Terraform IaC.'
      ],
      skills: ['AWS', 'Jenkins', 'Docker', 'Terraform', 'EKS', 'Prometheus', 'Grafana', 'Trivy', 'CI/CD'],
      actions: {
        repo: '',
        demo: ''
      }
    },
    {
      name: 'WordPress Deployment on AWS',
      date: 'Mar 2025',
      details: [
        'Deployed scalable WordPress on AWS using EC2, RDS, and S3.',
        'Configured Apache and MySQL for reliability and uptime.'
      ],
      skills: ['WordPress', 'AWS EC2', 'RDS', 'S3', 'Apache', 'MySQL', 'Ubuntu'],
      actions: {
        repo: '',
        demo: ''
      }
    }
  ],
  education: [
    {
      degree: 'B.E. - Computer Science and Engineering',
      school: 'P.R. Pote Patil College of Engineering and Management, Amravati',
      period: '2020 – 2024',
      gpa: 'CGPA: 8.35'
    },
    { degree: 'HSC - State Board', school: 'Mahatma Fule Mahavidyalaya, Warud', period: '2018 – 2020', gpa: 'Aggregate: 56.43%' },
    { degree: 'SSC - State Board', school: 'Jagrut Vidyalaya, Warud', period: '2017 – 2018', gpa: 'Aggregate: 84.40%' }
  ],
  contact: {
    email: 'payalingle147@gmail.com',
    phone: '+91-7888158609',
    location: 'Amravati, Maharashtra, IN',
    links: {
      linkedin: 'https://www.linkedin.com/in/payalingle/',
      github: 'https://github.com/Payalingle'
    }
  }
}

export default resume


