import { Calendar, MapPin } from 'lucide-react';

const SHOWS = [
  {
    date: '15 de Junho',
    day: 'Sábado',
    city: 'Belo Horizonte',
    venue: 'Espaço Rock Premium',
    time: '22h',
  },
  {
    date: '22 de Junho',
    day: 'Sábado',
    city: 'Contagem',
    venue: 'Bar do Zé',
    time: '21h',
  },
  {
    date: '29 de Junho',
    day: 'Sábado',
    city: 'Belo Horizonte',
    venue: 'Lugar Nenhum',
    time: '22h',
  },
  {
    date: '06 de Julho',
    day: 'Sábado',
    city: 'Nova Lima',
    venue: 'Festa Particular',
    time: '20h',
  },
];

export default function Schedule() {
  return (
    <section id="agenda" className="py-20 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">
            Agenda de <span className="text-primary">Shows</span>
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Confira os próximos shows e reserve seu lugar para uma noite inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SHOWS.map((show, idx) => (
            <div
              key={idx}
              className="neon-border p-6 rounded-lg hover:neon-glow-red transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-heading text-sm uppercase text-red-500">{show.day}</span>
                  </div>
                  <p className="font-display text-2xl text-white">{show.date}</p>
                </div>
                <span className="font-heading text-lg text-primary">{show.time}</span>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-white">{show.venue}</p>
                    <p className="text-gray-400 text-sm font-body">{show.city}</p>
                  </div>
                </div>
              </div>

              <button className="w-full btn-neon text-sm py-2 group-hover:shadow-lg transition-all">
                Comprar Ingresso
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-body mb-4">
            Quer contratar a BLAH80 para seu evento?
          </p>
          <button className="btn-neon">
            Solicitar Apresentação
          </button>
        </div>
      </div>
    </section>
  );
}
