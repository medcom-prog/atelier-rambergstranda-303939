import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';

export default function Kontakt() {
  return (
    <>
      <section className="bg-paper pt-32 md:pt-40 pb-32 md:pb-48 min-h-screen">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-6">
              <Eyebrow number="—">Kontakt</Eyebrow>
              <SplitText
                as="h1"
                unit="word"
                stagger={0.07}
                delay={0.15}
                italic={[5, 6, 7, 8]}
                className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02]"
              >
                {'Ta kontakt for spørsmål om kurs, residency eller samarbeid.'}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
                className="mt-8 font-serif text-body-lg text-graphite/70 leading-relaxed max-w-prose"
              >
                Galina Manikova er tilgjengelig for spørsmål om kurs og workshops, festivaler,
                artist-in-residence-opphold og samarbeid. Ring eller send en e-post.
              </motion.p>

              <dl className="mt-16 space-y-10">
                {[
                  {
                    Icon: Mail,
                    label: 'E-post',
                    value: 'galina@galina.no',
                    href: 'mailto:galina@galina.no',
                  },
                  {
                    Icon: Phone,
                    label: 'Telefon',
                    value: '+47 90 01 75 22',
                    href: 'tel:+4790017522',
                  },
                  {
                    Icon: MapPin,
                    label: 'Postadresse',
                    value: <>Vestre Braarudgaten 2b<br />3181 Horten</>,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/45 mb-3 inline-flex items-center gap-2">
                      <item.Icon className="h-3.5 w-3.5" strokeWidth={1.25} />
                      {item.label}
                    </dt>
                    <dd>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-serif text-2xl md:text-3xl text-graphite hover:text-prussian transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-serif text-2xl md:text-3xl text-graphite leading-tight block">
                          {item.value}
                        </span>
                      )}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-6"
            >
              <figure>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/drone-DJI_0577.jpg"
                    alt="Rambergstranda fra luften — eiendommen og fjellterrenget"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
                  Eiendom gnr. 29 / bnr. 185 · Foto · Knut-Ivar Johansen
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
