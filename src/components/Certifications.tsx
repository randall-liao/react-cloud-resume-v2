
export default function Certifications() {
  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-lg p-1 relative overflow-hidden group transition-all hover:shadow-md">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF9900] to-transparent opacity-10 rounded-bl-full pointer-events-none"></div>
      <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[#232F3E] rounded p-2 shadow-sm">
              <i className="fab fa-aws text-[#FF9900] text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">AWS Certified</h3>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-2 font-medium">Solutions Architect – Professional</p>
          <p className="text-xs text-slate-500 font-mono">Validation ID: AWS-PRO-2023-88X</p>
        </div>
        <div className="mt-6">
          <a className="text-sm font-medium text-[#FF9900] hover:text-[#ffac31] flex items-center uppercase tracking-wider" href="#">
            Verify Badge <span className="material-icons text-sm ml-1">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}
