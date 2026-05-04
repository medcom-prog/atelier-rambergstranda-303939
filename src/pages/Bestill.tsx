import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT, useLang } from '@/i18n';
import { cn } from '@/lib/utils';

// Mock availability — three states per date
type Avail = 'available' | 'limited' | 'booked';

// Generate a deterministic mock availability map keyed by yyyy-mm-dd.
// Pattern: weekends + every 3rd weekday available; some scattered booked.
function buildAvailability(year: number, month: number): Record<string, Avail> {
  const out: Record<string, Avail> = {};
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dow = date.getDay();
    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    if (isPast) {
      out[fmtKey(date)] = 'booked';
      continue;
    }
    // Pseudo-random but deterministic seed based on date
    const seed = (d * 7 + month * 11 + year) % 13;
    if (dow === 0 || dow === 6) {
      out[fmtKey(date)] = seed < 4 ? 'limited' : 'available';
    } else if (seed < 3) {
      out[fmtKey(date)] = 'booked';
    } else if (seed < 6) {
      out[fmtKey(date)] = 'limited';
    } else {
      out[fmtKey(date)] = 'available';
    }
  }
  return out;
}

function fmtKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const monthNamesByLang = {
  no: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const weekdayShortByLang = {
  no: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

export default function Bestill() {
  const t = useT();
  const { lang } = useLang();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<string | null>(null);
  const [type, setType] = useState<'workshop' | 'workshopShort' | 'residency' | 'other'>('workshop');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availability = useMemo(() => buildAvailability(viewYear, viewMonth), [viewYear, viewMonth]);

  const monthLabel = monthNamesByLang[lang][viewMonth];
  const yearLabel = viewYear;

  // Build calendar grid (Monday-first to match Norwegian convention)
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
  let firstWeekday = firstDayOfMonth.getDay() - 1;
  if (firstWeekday < 0) firstWeekday = 6;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: Array<{ day: number; key: string; avail: Avail } | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const key = fmtKey(new Date(viewYear, viewMonth, d));
    cells.push({ day: d, key, avail: availability[key] });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const goPrev = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  const goNext = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Don't allow going to past months
  const isAtCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-32 md:pt-40 pb-16 md:pb-20">
        <Container size="lg">
          <Eyebrow number="—">{t.booking.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.075}
            delay={0.15}
            italic={[1, 2, 3]}
            className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02] max-w-4xl"
          >
            {t.booking.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-serif text-body-lg text-graphite/70 max-w-prose-lg leading-relaxed"
          >
            {t.booking.heroSubtitle}
          </motion.p>
        </Container>
      </section>

      {/* Calendar + form layout */}
      <section className="bg-paper pb-32 md:pb-48">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="border border-graphite/15 bg-paper">
                {/* Month header */}
                <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-graphite/15">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={isAtCurrentMonth}
                    aria-label={t.common.previous}
                    className={cn(
                      'inline-flex items-center justify-center h-10 w-10 transition-colors',
                      isAtCurrentMonth
                        ? 'text-graphite/20 cursor-not-allowed'
                        : 'text-graphite/65 hover:text-graphite hover:bg-graphite/[0.04]'
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <p className="font-serif text-xl md:text-2xl text-graphite italic">
                    {monthLabel} <span className="font-mono text-base text-graphite/55 not-italic ml-1">{yearLabel}</span>
                  </p>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t.common.next}
                    className="inline-flex items-center justify-center h-10 w-10 text-graphite/65 hover:text-graphite hover:bg-graphite/[0.04] transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Weekday header */}
                <div className="grid grid-cols-7 gap-px bg-graphite/10 border-b border-graphite/10">
                  {weekdayShortByLang[lang].map((w) => (
                    <div
                      key={w}
                      className="bg-paper py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55"
                    >
                      {w}
                    </div>
                  ))}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7 gap-px bg-graphite/10">
                  {cells.map((c, i) => {
                    if (!c) {
                      return <div key={`pad-${i}`} className="bg-paper aspect-square" />;
                    }
                    const isSelected = selected === c.key;
                    const dotColor =
                      c.avail === 'available'
                        ? 'bg-prussian'
                        : c.avail === 'limited'
                        ? 'bg-prussian/40'
                        : 'bg-graphite/15';
                    const isClickable = c.avail !== 'booked';

                    return (
                      <button
                        key={c.key}
                        type="button"
                        disabled={!isClickable}
                        onClick={() => isClickable && setSelected(c.key)}
                        aria-label={`${c.day} ${monthLabel} — ${
                          c.avail === 'available'
                            ? t.booking.legendAvailable
                            : c.avail === 'limited'
                            ? t.booking.legendLimited
                            : t.booking.legendBooked
                        }`}
                        aria-pressed={isSelected}
                        className={cn(
                          'relative bg-paper aspect-square flex flex-col items-center justify-center transition-colors',
                          isClickable
                            ? 'hover:bg-paper-soft cursor-pointer'
                            : 'cursor-not-allowed opacity-50',
                          isSelected && 'bg-graphite text-paper hover:bg-graphite'
                        )}
                      >
                        <span
                          className={cn(
                            'font-serif text-base md:text-lg',
                            isSelected ? 'text-paper' : 'text-graphite'
                          )}
                        >
                          {c.day}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-1 h-1 w-1 rounded-full',
                            isSelected ? 'bg-paper' : dotColor
                          )}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 px-4 md:px-6 py-4 border-t border-graphite/10 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-prussian" />
                    {t.booking.legendAvailable}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-prussian/40" />
                    {t.booking.legendLimited}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-graphite/15" />
                    {t.booking.legendBooked}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="bg-paper-soft p-6 md:p-8 space-y-7"
                  >
                    {/* Selected date */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55 mb-2">
                        {t.booking.eyebrow}
                      </p>
                      <p className="font-serif text-2xl md:text-3xl text-graphite italic min-h-[2.4em]">
                        {selected ? (
                          (() => {
                            const [y, m, d] = selected.split('-').map(Number);
                            return `${d}. ${monthNamesByLang[lang][m - 1].toLowerCase()} ${y}`;
                          })()
                        ) : (
                          <span className="text-graphite/40">
                            {lang === 'no'
                              ? 'Velg en dato i kalenderen'
                              : 'Pick a date in the calendar'}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Type */}
                    <fieldset>
                      <legend className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55 mb-3">
                        {t.booking.typeLabel}
                      </legend>
                      <div className="space-y-2">
                        {[
                          { id: 'workshop', label: t.booking.typeWorkshop },
                          { id: 'workshopShort', label: t.booking.typeWorkshopShort },
                          { id: 'residency', label: t.booking.typeResidency },
                          { id: 'other', label: t.booking.typeOther },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            className={cn(
                              'flex items-center gap-3 p-3 border cursor-pointer transition-colors',
                              type === opt.id
                                ? 'border-graphite bg-paper'
                                : 'border-graphite/15 bg-paper/40 hover:bg-paper/70'
                            )}
                          >
                            <span
                              className={cn(
                                'h-3 w-3 rounded-full border transition-colors',
                                type === opt.id ? 'border-graphite bg-graphite' : 'border-graphite/30'
                              )}
                            />
                            <input
                              type="radio"
                              name="booking-type"
                              value={opt.id}
                              checked={type === opt.id}
                              onChange={() => setType(opt.id as typeof type)}
                              className="sr-only"
                            />
                            <span className="font-serif text-base text-graphite">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="booking-msg"
                        className="block font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55 mb-2"
                      >
                        {t.booking.messageLabel}
                      </label>
                      <textarea
                        id="booking-msg"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.booking.messagePlaceholder}
                        rows={4}
                        className="w-full bg-paper border border-graphite/15 p-3 font-serif text-base text-graphite placeholder:text-graphite/30 focus:outline-none focus:border-graphite transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!selected}
                      className={cn(
                        'w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors',
                        selected
                          ? 'bg-graphite text-paper hover:bg-prussian'
                          : 'bg-graphite/15 text-graphite/45 cursor-not-allowed'
                      )}
                    >
                      {t.booking.submitCta}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-graphite text-paper p-8 md:p-12"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-prussian mb-6">
                      <Check className="h-5 w-5 text-paper" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-paper italic mb-4">
                      {t.booking.successTitle}
                    </h2>
                    <p className="font-serif text-base text-paper/72 leading-relaxed">
                      {t.booking.successBody}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
