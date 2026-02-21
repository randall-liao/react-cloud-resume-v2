
export default function CommitHistory() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <span className="material-icons text-primary mr-2">history</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Commit History</h2>
      </div>
      <div className="relative pl-12 space-y-8">
        <div className="git-line"></div>
        
        {/* Cosmos */}
        <div className="relative group">
          <div className="git-node bg-white dark:bg-background-dark group-hover:bg-primary transition-colors"></div>
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cosmos</h3>
                <p className="text-primary font-medium">Senior Backend Engineer</p>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded text-sm font-mono text-slate-500">2021 - Present</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Architected a serverless microservices backend handling 50k+ concurrent connections. Optimized DynamoDB access patterns reducing latency by 40%.
            </p>
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "AWS Fargate", "Redis", "Python"].map((tech) => (
                <span key={tech} className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded text-xs font-mono text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Axon */}
        <div className="relative group">
          <div className="git-node bg-white dark:bg-background-dark group-hover:bg-primary transition-colors"></div>
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Axon</h3>
                <p className="text-primary font-medium">Cloud Infrastructure Engineer</p>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded text-sm font-mono text-slate-500">2019 - 2021</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Designed the CI/CD pipeline for machine learning model deployments. Managed EC2 fleet auto-scaling for neural network training jobs.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Terraform", "Docker", "Jenkins", "Bash"].map((tech) => (
                <span key={tech} className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded text-xs font-mono text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Data Engineering Inc */}
        <div className="relative group">
          <div className="git-node bg-white dark:bg-background-dark group-hover:bg-primary transition-colors"></div>
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Engineering Inc.</h3>
                <p className="text-primary font-medium">Backend Developer</p>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded text-sm font-mono text-slate-500">2018 - 2019</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Implemented real-time data ingestion services. Worked on high-throughput event streaming using Kafka and Apache Flink.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Apache Flink", "Kafka", "Java", "PostgreSQL"].map((tech) => (
                <span key={tech} className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded text-xs font-mono text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
