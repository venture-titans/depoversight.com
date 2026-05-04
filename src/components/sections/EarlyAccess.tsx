import { useId, useState, type FormEvent } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Button } from '../ui/Button';

const TOOL_OPTIONS = ['dependabot', 'snyk', 'ghas', 'socket', 'semgrep', 'other'] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formspree endpoint that the form POSTs submissions to. Public — Formspree's
// own settings (allowed-domains, Akismet, honeypot) provide spam protection,
// not URL secrecy. Change this URL to switch providers or move to a different
// form within the Formspree dashboard.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqvekjb';

export function EarlyAccess() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [githubOrg, setGithubOrg] = useState('');
  const [ecosystem, setEcosystem] = useState('');
  const [currentTool, setCurrentTool] = useState('');
  const [message, setMessage] = useState('');
  // Honeypot field — stays empty for humans (the input is visually hidden).
  // Bots that auto-fill every input populate it; Formspree drops those.
  const [gotcha, setGotcha] = useState('');
  // Two separate error states: emailError shows under the email field for
  // validation failures; submitError shows above the submit button for
  // network/server failures during submission. Same root state would put a
  // network-failure message under the email field, which reads as if the
  // user got the email wrong.
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ids = {
    name: useId(),
    email: useId(),
    company: useId(),
    github: useId(),
    eco: useId(),
    tool: useId(),
    message: useId(),
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(null);
    setSubmitError(null);
    if (!EMAIL_RE.test(email.trim())) {
      setEmailError(t('earlyAccess.fields.email.error'));
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
          company: company.trim() || undefined,
          githubOrg: githubOrg.trim() || undefined,
          ecosystem: ecosystem.trim() || undefined,
          currentTool: currentTool || undefined,
          message: message.trim() || undefined,
          _gotcha: gotcha,
        }),
      });
      if (!response.ok) {
        throw new Error(`Formspree responded ${response.status}`);
      }
      setSubmitted(true);
    } catch {
      setSubmitError(t('earlyAccess.submitError'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section
      id="early-access"
      title={t('earlyAccess.sectionTitle')}
      lead={t('earlyAccess.sectionLead')}
      tone="subtle"
    >
      <p className="mx-auto mb-2 max-w-2xl rounded-lg border border-accent/30 bg-accent/5 px-5 py-3 text-center text-sm text-fg">
        {t('earlyAccess.callout')}
      </p>
      <p className="mx-auto mb-8 max-w-2xl text-center text-xs text-fg-subtle">
        {t('earlyAccess.pricing')}
      </p>
      <div className="mx-auto max-w-xl rounded-xl border border-line bg-ink-800/60 p-6 shadow-xl sm:p-8">
        {submitted ? (
          <div role="status" aria-live="polite" className="text-center">
            <div
              aria-hidden="true"
              className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success"
            >
              <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
                <path
                  d="M3.5 8.5l3 3 6-6.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-fg">
              {t('earlyAccess.success.title')}
            </h3>
            <p className="mt-2 text-sm text-fg-muted">{t('earlyAccess.success.body')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Honeypot — visually hidden, off-screen, not focusable, not
             * announced. Bots that auto-fill every input populate it; real
             * users never touch it. Formspree drops any submission whose
             * `_gotcha` field is non-empty. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={gotcha}
              onChange={(e) => setGotcha(e.target.value)}
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.name} label={t('earlyAccess.fields.name.label')}>
                <input
                  id={ids.name}
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('earlyAccess.fields.name.placeholder')}
                  className={inputClasses(false)}
                />
              </Field>
              <Field
                id={ids.email}
                label={t('earlyAccess.fields.email.label')}
                required
                requiredLabel={t('earlyAccess.fields.email.required')}
              >
                <input
                  id={ids.email}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('earlyAccess.fields.email.placeholder')}
                  aria-invalid={Boolean(emailError)}
                  aria-describedby={emailError ? `${ids.email}-error` : undefined}
                  className={inputClasses(Boolean(emailError))}
                />
                {emailError && (
                  <p id={`${ids.email}-error`} className="mt-1.5 text-xs text-danger">
                    {emailError}
                  </p>
                )}
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.company} label={t('earlyAccess.fields.company.label')}>
                <input
                  id={ids.company}
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t('earlyAccess.fields.company.placeholder')}
                  className={inputClasses(false)}
                />
              </Field>
              <Field id={ids.github} label={t('earlyAccess.fields.githubOrg.label')}>
                <input
                  id={ids.github}
                  type="text"
                  value={githubOrg}
                  onChange={(e) => setGithubOrg(e.target.value)}
                  placeholder={t('earlyAccess.fields.githubOrg.placeholder')}
                  className={inputClasses(false)}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.eco} label={t('earlyAccess.fields.ecosystem.label')}>
                <input
                  id={ids.eco}
                  type="text"
                  value={ecosystem}
                  onChange={(e) => setEcosystem(e.target.value)}
                  placeholder={t('earlyAccess.fields.ecosystem.placeholder')}
                  className={inputClasses(false)}
                />
              </Field>
              <Field id={ids.tool} label={t('earlyAccess.fields.currentTool.label')}>
                <select
                  id={ids.tool}
                  value={currentTool}
                  onChange={(e) => setCurrentTool(e.target.value)}
                  className={`${inputClasses(false)} appearance-none bg-[length:0.65rem] bg-[right_0.75rem_center] bg-no-repeat pr-9`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'><path d='M3 4.5l3 3 3-3' stroke='%239aa4b2' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                  }}
                >
                  <option value="">{t('earlyAccess.fields.currentTool.placeholder')}</option>
                  {TOOL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {t(`earlyAccess.fields.currentTool.options.${opt}`)}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id={ids.message} label={t('earlyAccess.fields.message.label')}>
              <textarea
                id={ids.message}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('earlyAccess.fields.message.placeholder')}
                className={inputClasses(false)}
              />
            </Field>

            {submitError && (
              <p
                role="alert"
                className="rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger"
              >
                {submitError}
              </p>
            )}
            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" disabled={submitting}>
                {submitting ? t('earlyAccess.submitting') : t('earlyAccess.submit')}
              </Button>
            </div>
          </form>
        )}
      </div>
      {/* "What happens next" expectations beneath the form. Addresses customer
       * review issue #4 — submitting felt like throwing data into a void. */}
      <p className="mx-auto mt-4 max-w-xl text-center text-xs text-fg-subtle">
        {t('earlyAccess.expectations')}
      </p>
      {/* Privacy notice with embedded link. <Trans> handles word-order
       * differences across languages (e.g., the link sits mid-sentence in
       * Japanese / Korean). */}
      <p className="mx-auto mt-2 max-w-xl text-center text-xs text-fg-subtle">
        <Trans
          i18nKey="earlyAccess.privacyNotice"
          components={{
            link: (
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:text-accent-hover hover:underline"
              />
            ),
          }}
        />
      </p>
    </Section>
  );
}

function Field({
  id,
  label,
  required = false,
  requiredLabel,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  requiredLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fg-muted"
      >
        {label}
        {required && requiredLabel && (
          <span className="text-fg-subtle">({requiredLabel})</span>
        )}
      </label>
      {children}
    </div>
  );
}

function inputClasses(error: boolean) {
  // text-base (16px) is intentional. text-sm (14px) triggers iOS Safari to zoom
  // the viewport when focusing the field, which jolts the page on mobile.
  return `block min-h-[44px] w-full rounded-md border bg-ink-900 px-3 py-2 text-base text-fg placeholder:text-fg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
    error ? 'border-danger/60' : 'border-line'
  }`;
}
