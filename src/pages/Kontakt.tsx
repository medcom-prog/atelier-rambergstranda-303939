import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';

export default function Kontakt() {
  return (
    <>
      <section className="bg-paper pt-32 md:pt-40 pb-32 md:pb-48 min-h-screen">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-6">
              <Eyebrow number="—">Kontakt</Eyebrow>
              <h1 className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02]">
                Ta kontakt for spørsmål om <em>kurs, residency eller samarbeid.</em>
              </h1>
              <p className="mt-8 font-serif text-body-lg text-graphite/70 leading-relaxed max-w-prose">
                Galina Manikova er tilgjengelig for spørsmål om kurs og workshops, festivaler,
                artist-in-residence-opphold og samarbeid. Ring eller send en e-post.
              </p>

              <dl className="mt-16 space-y-10">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/45 mb-3 inline-flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.25} />
                    E-post
                  </dt>
                  <dd>
                    <a
                      href="mailto:galina@galina.no"
                      className="font-serif text-2xl md:text-3xl text-graphite hover:text-prussian transition-colors"
                    >
                      galina@galina.no
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/45 mb-3 inline-flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.25} />
                    Telefon
                  </dt>
                  <dd>
                    <a
                      href="tel:+4790017522"
                      className="font-serif text-2xl md:text-3xl text-graphite hover:text-prussian transition-colors"
                    >
                      +47 90 01 75 22
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/45 mb-3 inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.25} />
                    Postadresse
                  </dt>
                  <dd className="font-serif text-2xl md:text-3xl text-graphite leading-tight">
                    Vestre Braarudgaten 2b
                    <br />
                    3181 Horten
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-6">
              <figure>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/drone-DJI_0577.jpg"
                    alt="Rambergstranda fra luften — eiendommen og fjellterrenget"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
                  Eiendom gnr. 29 / bnr. 185 · Foto · Knut-Ivar Johansen
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
