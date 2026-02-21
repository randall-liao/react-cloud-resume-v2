import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import CommitHistory from './components/CommitHistory';
import Certifications from './components/Certifications';
import Interests from './components/Interests'; // Renamed from PrecisionCooking block
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 antialiased min-h-screen pb-20 relative font-display">
      <div className="fixed top-20 right-0 -z-10 opacity-20 pointer-events-none overflow-hidden h-96 w-96">
        <img alt="Abstract Pattern" className="w-full h-full object-cover blur-3xl rounded-full" src="/assets/background.png" />
      </div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
        <Hero />
        <OriginStory />
        <CommitHistory />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Certifications />
            <Interests />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
