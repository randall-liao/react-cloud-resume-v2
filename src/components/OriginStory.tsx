
export default function OriginStory() {
  return (
    <section className="relative">
      <div className="bg-white dark:bg-surface-dark rounded-lg p-1 border-l-4 border-primary shadow-sm transition-colors">
        <div className="p-6 md:p-8 bg-gray-50 dark:bg-[#161b22] rounded-r-lg transition-colors">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary">
              <span className="material-icons text-3xl">cloud_queue</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 font-display">Origin Story: The GeForce Analogy</h3>
              <p className="text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed font-serif">
                "In 2018, I tried GeForce Now and realized my flimsy laptop was running a AAA game on a rig hundreds of miles away. The latency was negligible, the power was immense. That's when it clicked: computing isn't about the box in front of you, it's about the pipe and the powerhouse at the other end. I've been building those powerhouses ever since."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
