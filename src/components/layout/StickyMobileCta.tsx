import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Persistent "Request Early Access" pill that appears at the bottom of the
 * viewport on mobile, after the user has scrolled past the hero. Hidden when
 * the early-access form itself is in view (no point showing the CTA on top of
 * the destination). Hidden on tablet+ — the desktop nav already has a CTA.
 */
export function StickyMobileCta() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroSentinel = document.getElementById('top');
    const formSentinel = document.getElementById('early-access');
    if (!heroSentinel || !formSentinel) return;

    let belowHero = false;
    let nearForm = false;
    const update = () => setVisible(belowHero && !nearForm);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        belowHero = !entry?.isIntersecting;
        update();
      },
      { rootMargin: '0px 0px -85% 0px' }
    );
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        nearForm = Boolean(entry?.isIntersecting);
        update();
      },
      { rootMargin: '0px 0px -20% 0px' }
    );

    heroObserver.observe(heroSentinel);
    formObserver.observe(formSentinel);
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink-900/95 backdrop-blur px-4 py-3 transition-transform duration-200 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href="#early-access"
        className="flex h-11 w-full items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-ink-950 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      >
        {t('nav.cta')}
      </a>
    </div>
  );
}
