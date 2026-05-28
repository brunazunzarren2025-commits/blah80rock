import { Music as MusicIcon, Play } from 'lucide-react';

const SONGS = [
  {
    title: 'Noites Inesquecíveis',
    artist: 'BLAH80',
    duration: '3:45',
    spotify: 'https://open.spotify.com',
  },
  {
    title: 'Energia Neon',
    artist: 'BLAH80',
    duration: '4:12',
    spotify: 'https://open.spotify.com',
  },
  {
    title: 'Palco de Fogo',
    artist: 'BLAH80',
    duration: '3:58',
    spotify: 'https://open.spotify.com',
  },
  {
    title: 'Memórias dos Anos 80',
    artist: 'BLAH80',
    duration: '4:33',
    spotify: 'https://open.spotify.com',
  },
];

export default function Music() {
  return (
    <section id="musicas" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">
            Nossas <span className="text-primary">Músicas</span>
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Ouça os melhores sucessos do pop rock nacional em versões exclusivas da BLAH80
          </p>
        </div>

        {/* Spotify Embed */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-md neon-border p-6 rounded-lg">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <MusicIcon className="w-16 h-16 text-primary opacity-50" />
            </div>
            <p className="text-center text-gray-400 mt-4 font-body">
              Ouça a BLAH80 no Spotify
            </p>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-neon text-center mt-4 text-sm"
            >
              Abrir no Spotify
            </a>
          </div>
        </div>

        {/* Songs List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl mb-6 text-white uppercase">Principais Faixas</h3>
          <div className="space-y-3">
            {SONGS.map((song, idx) => (
              <div
                key={idx}
                className="neon-border p-4 rounded-lg hover:neon-glow-red transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Play className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-white">{song.title}</p>
                    <p className="text-sm text-gray-400 font-body">{song.artist}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm font-body">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="font-heading text-2xl mb-6 text-white uppercase text-center">Vídeos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((idx) => (
              <div key={idx} className="neon-border-cyan p-2 rounded-lg group hover:neon-glow-cyan transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-center text-gray-400 mt-3 font-body">Clipe - Música {idx}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
