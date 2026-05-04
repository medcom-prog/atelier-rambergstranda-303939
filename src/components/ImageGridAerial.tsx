import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1200&q=80&auto=format&fit=crop',
    alt: 'Rambergstranda sett fra luften om sommeren — foto: Knut-Ivar Johansen',
    caption: 'Rambergstranda · sommer',
    colSpan: 'col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    src: 'https://images.unsplash.com/photo-1551244072-5d12893278bc?w=800&q=80&auto=format&fit=crop',
    alt: 'Lofoten hav og fjell',
    caption: 'Flakstad, Lofoten',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80&auto=format&fit=crop',
    alt: 'Cyanotype fotografi på papir',
    caption: 'Alternativ prosess',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
]

export function ImageGridAerial() {
  return (
    <section className="bg-paper py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <motion.p
          className="font-mono text-label text-muted uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Stedet
        </motion.p>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative overflow-hidden group ${img.colSpan}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative overflow-hidden ${img.aspect}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 via-transparent to-transparent transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 font-mono text-label text-paper/80 uppercase tracking-wide">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-4 font-mono text-label text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Foto: Knut-Ivar Johansen (drone) · Galina Manikova (alternativ-prosess)
        </motion.p>
      </div>
    </section>
  )
}
