const ABOUT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-underground-bar-SAYokkYLZjBBwactiVxBQ.webp';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="neon-border-cyan p-2">
              <img
                src={ABOUT_IMAGE}
                alt="BLAH80 - Underground Bar"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-magenta-500/30 rounded-full opacity-50"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">
              Sobre a <span className="text-primary">BLAH80</span>
            </h2>

            <div className="space-y-4 text-gray-300 font-body">
              <p>
                A BLAH80 é uma banda de rock brasileira que toca os maiores sucessos do pop rock nacional dos anos 80. Desde 2016, levamos nostalgia, energia e atitude rock'n'roll para os palcos de Belo Horizonte e região.
              </p>

              <p>
                Nossa missão é resgatar a essência do rock dos anos 80, aquele período áureo onde a música era pura emoção e rebeldia. Cada apresentação é uma jornada no tempo, onde o público revive momentos inesquecíveis ao som de clássicos que marcaram gerações.
              </p>

              <p>
                Com influências de bandas como Legião Urbana, Titãs, Paralamas do Sucesso e outras lendas do rock nacional, a BLAH80 traz uma proposta única: celebrar o melhor da música brasileira em um formato moderno e envolvente.
              </p>
            </div>

            {/* Influences */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-heading text-xl mb-4 text-cyan-300 uppercase">Influências Musicais</h3>
              <div className="flex flex-wrap gap-2">
                {['Legião Urbana', 'Titãs', 'Paralamas', 'Ultraje a Rigor', 'Engenheiros', 'RPM', 'Barão Vermelho'].map((band) => (
                  <span key={band} className="px-3 py-1 border border-magenta-500/50 text-sm text-magenta-300 rounded">
                    {band}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
