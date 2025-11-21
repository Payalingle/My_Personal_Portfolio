import React from 'react'

export default function Skills({ data }) {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Core Competencies</span>
          <h2>Technical Skills</h2>
        </div>
        <div className="grid two">
          {data.map((group) => (
            <div key={group.category} className="card glass gradient hover-lift">
              <h3 className="card-title">{group.category}</h3>
              <div className="chips">
                {group.items.map((s) => {
                  const iconMap = {
                    'AWS (EC2, S3, RDS, IAM, EKS, VPC)': 'fas fa-cloud',
                    'Terraform': 'fas fa-code',
                    'Docker': 'fab fa-docker',
                    'Jenkins': 'fas fa-cog',
                    'Ansible': 'fas fa-play',
                    'CI/CD': 'fas fa-sync-alt',
                    'Prometheus': 'fas fa-chart-line',
                    'Grafana': 'fas fa-chart-bar',
                    'SonarQube': 'fas fa-search',
                    'Trivy': 'fas fa-shield-alt',
                    'Python': 'fab fa-python',
                    'Linux (Ubuntu)': 'fab fa-linux',
                    'Apache': 'fas fa-server',
                    'Nginx': 'fas fa-server',
                    'MySQL': 'fas fa-database',
                    'HTML, CSS, Bootstrap': 'fab fa-html5',
                    'WordPress': 'fab fa-wordpress',
                    'Git': 'fab fa-git',
                    'GitHub': 'fab fa-github',
                    'GitLab CI/CD': 'fab fa-gitlab',
                    'Windows': 'fab fa-windows'
                  };
                  const icon = iconMap[s] || 'fas fa-code';
                  return (
                    <span className="chip" key={s}>
                      <i className={icon}></i> {s}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


