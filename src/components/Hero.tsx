
export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Open to Work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            Building Resilient <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Cloud Systems</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
            Senior Backend Engineer specializing in distributed systems, serverless architectures, and high-throughput data pipelines.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="px-6 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border hover:border-primary text-slate-900 dark:text-white rounded-lg font-medium transition-all shadow-sm flex items-center group">
            View Projects 
            <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform text-primary">arrow_forward</span>
          </button>
          <button className="px-6 py-3 bg-transparent text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors font-mono">
            ./contact_me.sh
          </button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="rounded-xl overflow-hidden shadow-xl dark:shadow-2xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-surface-border transition-colors">
          <div className="bg-gray-100 dark:bg-[#252526] px-4 py-2 flex items-center space-x-2 border-b border-gray-200 dark:border-[#1e1e1e] transition-colors">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 px-3 py-1 bg-white dark:bg-[#1e1e1e] rounded-t-md text-xs text-slate-600 dark:text-slate-400 font-mono flex items-center border-t border-x border-gray-200 dark:border-transparent transition-colors">
              <span className="material-icons text-[10px] mr-1 text-blue-500 dark:text-blue-400">code</span>
              profile.json
            </div>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto transition-colors">
            <div className="text-slate-600 dark:text-slate-400 select-none grid grid-cols-[2rem_1fr] gap-2">
              <div className="text-right text-slate-400 dark:text-slate-600 pr-2 border-r border-gray-200 dark:border-slate-700 flex flex-col transition-colors">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
              </div>
              <div className="pl-2">
                <span className="text-blue-600 dark:text-code-keyword">const</span> <span className="text-[#0070c1] dark:text-[#e5c07b]">engineer</span> = &#123;<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">name</span>: <span className="text-[#a31515] dark:text-code-string">"Randall"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">role</span>: <span className="text-[#a31515] dark:text-code-string">"Cloud Architect"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">location</span>: <span className="text-[#a31515] dark:text-code-string">"Toronto, ON"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">stack</span>: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a31515] dark:text-code-string">"React"</span>, <span className="text-[#a31515] dark:text-code-string">"Node.js"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a31515] dark:text-code-string">"AWS Lambda"</span>, <span className="text-[#a31515] dark:text-code-string">"Terraform"</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">status</span>: <span className="text-[#a31515] dark:text-code-string">"Ready to deploy"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#001080] dark:text-code-key">execute</span>: <span className="text-blue-600 dark:text-code-keyword">async function</span>() &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-code-keyword">return</span> <span className="text-[#a31515] dark:text-code-string">"High Impact"</span>;<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;;<span className="blinking-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
