
export default function Interests() {
  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-lg p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Precision Cooking</h3>
          <p className="text-primary font-medium text-sm mt-1">Sous Vide Enthusiast</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
          <span className="material-icons">thermostat</span>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
        Applying the same fault-tolerant logic to steak as I do to servers. Consistent temperature control ensures 99.99% reliability on medium-rare outcomes.
      </p>
      <div className="bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded p-3 font-mono text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
        <div className="flex flex-col">
           <span className="uppercase text-[10px] text-slate-400 mb-1">Target Temp</span>
           <span className="text-slate-900 dark:text-white font-bold text-base">54.5°C</span>
        </div>
        <div className="flex flex-col text-right">
           <span className="uppercase text-[10px] text-slate-400 mb-1">Duration</span>
           <span className="text-slate-900 dark:text-white font-bold text-base">2h 30m</span>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
        <div className="flex items-center text-green-600 dark:text-green-500 font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" title="Heater Active"></span>
            ACTIVE
        </div>
      </div>
    </div>
  );
}
