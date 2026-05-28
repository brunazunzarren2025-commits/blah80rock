import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Quer contratar a BLAH80 para seu evento? Preencha o formulário abaixo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="neon-border p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-white mb-2">Email</h3>
            <p className="text-gray-400 font-body">contato@blah80.com.br</p>
          </div>

          <div className="neon-border p-6 rounded-lg text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-white mb-2">Telefone</h3>
            <p className="text-gray-400 font-body">(31) 99999-8888</p>
          </div>

          <div className="neon-border p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-white mb-2">Localização</h3>
            <p className="text-gray-400 font-body">Belo Horizonte, MG</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto neon-border p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-heading text-white mb-2 uppercase text-sm">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-2 text-white font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-heading text-white mb-2 uppercase text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-2 text-white font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block font-heading text-white mb-2 uppercase text-sm">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded px-4 py-2 text-white font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="(31) 9999-8888"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-heading text-white mb-2 uppercase text-sm">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-background border border-border rounded px-4 py-2 text-white font-body focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Conte-nos sobre seu evento..."
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-neon py-3 text-lg">
              Enviar Solicitação
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm font-body mt-6">
            Responderemos sua mensagem em até 24 horas
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-body mb-6">Siga a BLAH80 nas redes sociais</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/blah80oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              title="Instagram"
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              title="YouTube"
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              title="Spotify"
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.414-.765.645-1.266.645-.428 0-.926-.159-1.266-.591-.339-.34-.645-.893-.645-1.466v-2.192h.691v2.192c0 .372.156.667.46.888.305.22.737.337 1.228.337.467 0 .948-.135 1.266-.474.318-.338.556-.922.556-1.466v-2.192h.691v2.192c0 .541-.278 1.208-.556 1.467z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5531999998888"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              title="WhatsApp"
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.206-.368-.067c-1.264-.23-2.497-.559-3.631-1.084l-.108-.052-.112.033A9.884 9.884 0 000 9.88c0 5.471 4.26 9.922 9.88 9.922 1.54 0 3.062-.406 4.413-1.173l.342-.195.371.067c1.265.23 2.505.557 3.651 1.085l.107.052.112-.032a9.884 9.884 0 001.532-9.3l-.108-.052-.112-.033c-1.119.385-2.233.645-3.316.81l-.339.048-.346-.137A9.887 9.887 0 0011.52 3.396c-.5 0-.999.048-1.49.14l-.355.041-.36-.036A9.884 9.884 0 0011.051 6.98z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
