import { useLang } from '@/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  tone?: 'paper' | 'graphite';
  className?: string;
}

export function LanguageSwitcher({ tone = 'graphite', className }: LanguageSwitcherProps) {
  const { lang, setLang } = useLang();

  const colorClass =
    tone === 'paper'
      ? { active: 'text-paper', inactive: 'text-paper/45 hover:text-paper/85', sep: 'text-paper/30' }
      : { active: 'text-graphite', inactive: 'text-graphite/45 hover:text-graphite/85', sep: 'text-graphite/25' };

  return (
    <div
      role="group"
      aria-label="Language / Språk"
      className={cn('inline-flex items-center font-mono text-[11px] uppercase tracking-[0.2em] gap-1.5', className)}
    >
      <button
        type="button"
        onClick={() => setLang('no')}
        aria-pressed={lang === 'no'}
        className={cn('transition-colors', lang === 'no' ? colorClass.active : colorClass.inactive)}
      >
        NO
      </button>
      <span aria-hidden="true" className={colorClass.sep}>·</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn('transition-colors', lang === 'en' ? colorClass.active : colorClass.inactive)}
      >
        EN
      </button>
    </div>
  );
}
