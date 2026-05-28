import { ImageIcon } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    title: 'Show em Belo Horizonte',
    category: 'Shows',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-hero-stage-3dX3fwp72yi5uSFDS3CtWx.webp',
  },
  {
    title: 'Bastidores',
    category: 'Bastidores',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-neon-pattern-8aWbzQaXhh55wtshcyYcx6.webp',
  },
  {
    title: 'Público Animado',
    category: 'Público',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-band-silhouette-fLpxrnjjjwZRL5EFrvg5KN.webp',
  },
  {
    title: 'Ensaio da Banda',
    category: 'Bastidores',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-underground-bar-SAYokkYLZjBBwactiVxBQ.webp',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">
            <span className="text-primary">Galeria</span> de Fotos
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Momentos inesquecíveis de shows, bastidores e encontros com o público
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg neon-border cursor-pointer hover:neon-glow-magenta transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="font-heading text-sm uppercase text-primary mb-1">{item.category}</p>
                <p className="font-heading text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-body mb-4">
            Quer ver mais fotos? Siga a BLAH80 nas redes sociais
          </p>
          <a
            href="https://instagram.com/blah80oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-block"
          >
            Ir para Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
