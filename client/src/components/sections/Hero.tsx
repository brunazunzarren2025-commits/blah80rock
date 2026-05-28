import './Hero.css';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565191423/BckekaE8RGruQE9PtoTmzs/blah80-band-silhouette-fLpxrnjjjwZRL5EFrvg5KN.webp';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines pointer-events-none"></div>

      {/* Content */}
      <div className="hero-content relative z-10 container mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <div className="neon-border-cyan px-6 py-3">
            <span className="font-heading text-sm uppercase tracking-widest text-cyan-300">
              Desde 2016
            </span>
          </div>
        </div>

        <h1 className="hero-title mb-6 animate-fade-in">
          BLAH80
        </h1>

        <p className="hero-subtitle mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          O rock dos anos 80 vive aqui
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Os maiores sucessos do pop rock nacional ao vivo. Energia, nostalgia e atitude rock'n'roll em cada apresentação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('musicas')}
            className="btn-neon"
          >
            Ouvir Agora
          </button>
          <button
            onClick={() => scrollToSection('agenda')}
            className="px-6 py-3 font-bold text-white uppercase tracking-wider transition-all duration-300 border-2 border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            Agenda de Shows
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-magenta-500/30 rounded-full animate-pulse opacity-20 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-cyan-400/30 rounded-full animate-pulse opacity-20 hidden md:block" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
}
