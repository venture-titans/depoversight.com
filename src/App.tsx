import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { StickyMobileCta } from './components/layout/StickyMobileCta';
import { Home } from './routes/Home';
import { BlogIndex } from './routes/BlogIndex';
import { BlogSlugOrCategory } from './routes/BlogSlugOrCategory';
import { ScrollToTop } from './routes/ScrollToTop';

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-ink-950 text-fg">
      <a href="#main-content" className="skip-link">
        {t('nav.skipToContent')}
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogSlugOrCategory />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
