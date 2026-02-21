
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-surface-border transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-primary font-mono font-bold text-xl">&lt;Randall <span>/</span>&gt;</span>
        </div>
        <div className="flex items-center space-x-4">
          <a className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-slate-600 dark:text-slate-300" href="#">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-slate-600 dark:text-slate-300" href="#">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-slate-600 dark:text-slate-300" href="#">
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <button 
            aria-label="Toggle theme" 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-slate-600 dark:text-yellow-400 group relative"
          >
            <span className="material-symbols-outlined text-[24px]">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
