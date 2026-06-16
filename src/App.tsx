import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import LibraryPage from './pages/LibraryPage';
import VSModePage from './pages/VSModePage';
import RankingsPage from './pages/RankingsPage';
import AboutPage from './pages/AboutPage';

import LifeScrollPage from './pages/LifeScrollPage';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy text-white h-16 border-b border-brand-border flex items-center px-8 transition-colors">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-serif italic text-brand-gold hover:text-[#E8CD6C] hover:opacity-80 transition-all cursor-pointer">
            CE
          </Link>
          <h1 className="text-lg font-serif tracking-tight">
            <Link to="/">Currents of Education <span className="opacity-70 font-sans text-xs uppercase tracking-widest ml-2 hidden sm:inline">A Living Map of Western Educational Thought</span></Link>
          </h1>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-widest">
          <Link to="/map" className="hover:text-brand-gold transition-colors">The Map</Link>
          <Link to="/library" className="hover:text-brand-gold transition-colors">Library</Link>
          <Link to="/vs" className="hover:text-brand-gold transition-colors">VS Mode</Link>
          <Link to="/rankings" className="hover:text-brand-gold transition-colors">Giants Ranking</Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/thinker/:id" element={<LifeScrollPage />} />
            <Route path="/vs" element={<VSModePage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
