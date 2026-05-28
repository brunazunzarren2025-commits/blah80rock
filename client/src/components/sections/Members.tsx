import { Music, Mic2, Zap } from 'lucide-react';

const MEMBERS = [
  {
    name: 'João Silva',
    instrument: 'Vocal',
    icon: Mic2,
    description: 'Voz potente e carisma de palco',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Carlos Mendes',
    instrument: 'Guitarra',
    icon: Zap,
    description: 'Riffs memoráveis e energia pura',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Bruno Costa',
    instrument: 'Baixo',
    icon: Music,
    description: 'Groove que faz o público dançar',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Pedro Oliveira',
    instrument: 'Bateria',
    icon: Zap,
    description: 'Ritmo impecável e presença marcante',
    socials: { instagram: '#', youtube: '#' },
  },
];

export default function Members() {
  return (
    <section id="integrantes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">
            Os <span className="text-primary">Integrantes</span>
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Conheça os músicos que fazem a magia acontecer no palco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERS.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                className="group neon-border p-6 rounded-lg hover:neon-glow-red transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="font-heading text-xl text-white text-center mb-2">
                  {member.name}
                </h3>

                <p className="text-red-500 text-center font-heading text-sm uppercase mb-3">
                  {member.instrument}
                </p>

                <p className="text-gray-400 text-center text-sm font-body mb-4">
                  {member.description}
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href={member.socials.instagram}
                    className="text-gray-400 hover:text-primary transition-colors"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                  <a
                    href={member.socials.youtube}
                    className="text-gray-400 hover:text-primary transition-colors"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
