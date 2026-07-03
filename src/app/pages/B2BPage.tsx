import { Link } from "react-router";
import { ArrowLeft, MessageCircle, Moon, Sun, CheckCircle, Truck, Star, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function B2BPage() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <ArrowLeft size={16} /> Volver
            </Link>
            <span className="text-border select-none">|</span>
            <Link to="/" className="font-display text-lg text-primary font-semibold tracking-tight">
              Miriam Bakery
            </Link>
          </div>
          <button onClick={() => setDark(!dark)} aria-label="Cambiar tema"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="py-24 px-6 md:px-16 bg-primary">
          <div className="max-w-6xl mx-auto flex flex-col gap-8 items-start">
            <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
              Colaboraciones B2B
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground font-semibold leading-tight max-w-3xl">
              Dale a tu local el sabor que merece
            </h1>
            <p className="text-primary-foreground/70 text-xl leading-relaxed max-w-2xl">
              Somos una pastelería artesanal en Lucena que trabaja con cafeterías, bares y restaurantes que quieren ofrecer algo diferente. Productos horneados a diario, sin aceite de palma, con ingredientes de verdad.
            </p>
            <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded text-sm font-medium hover:opacity-90 transition-opacity mt-2">
              <MessageCircle size={16} /> Hablar con Miriam por WhatsApp
            </a>
          </div>
        </section>

        {/* ── POR QUÉ COLABORAR ── */}
        <section className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Por qué elegirnos
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">
                Pastelería que marca la diferencia
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Star size={22} style={{ color: "var(--accent)" }} />,
                  title: "Calidad artesanal",
                  desc: "Cada pieza se elabora a mano en nuestra obrador, con recetas propias y procesos cuidados.",
                },
                {
                  icon: <CheckCircle size={22} style={{ color: "var(--accent)" }} />,
                  title: "Sin aceite de palma",
                  desc: "Un argumento de venta real para tus clientes. Transparencia total en los ingredientes.",
                },
                {
                  icon: <Clock size={22} style={{ color: "var(--accent)" }} />,
                  title: "Horneado diario",
                  desc: "Producto fresco cada día. Nada de congelados ni industriales.",
                },
                {
                  icon: <Truck size={22} style={{ color: "var(--accent)" }} />,
                  title: "Adaptado a ti",
                  desc: "Cantidades, referencias y formatos pensados para las necesidades de tu negocio.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="font-display text-lg text-primary font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUÉ OFRECEMOS ── */}
        <section className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Nuestro catálogo
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">
                ¿Qué puede ofrecer tu local?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Disponemos de una amplia variedad de productos que se adaptan a cualquier tipo de negocio hostelero.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { emoji: "🎂", title: "Tartas de ración", desc: "Porciones individuales de nuestras tartas más populares, listas para vitrina." },
                { emoji: "🍮", title: "Tartas de queso", desc: "Nuestra especialidad. Cremosas, con un tostado perfecto y una presentación impecable." },
                { emoji: "🥐", title: "Bollería artesanal", desc: "Croissants, napolitanas y bizcochos horneados cada mañana." },
                { emoji: "🍫", title: "Brownies", desc: "Jugosos y con chocolate de calidad. Un clásico que nunca falla en la vitrina." },
                { emoji: "🥟", title: "Empanadas", desc: "Por encargo en varios tamaños y rellenos. Ideales para complementar tu oferta salada." },
                { emoji: "🍦", title: "Helados artesanales", desc: "Gelato con ingredientes naturales, disponibles por temporada." },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-3">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="font-display text-lg text-primary font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                El proceso
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">
                Así de sencillo es empezar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Nos escribes", desc: "Cuéntanos qué tipo de negocio tienes, cuántos clientes mueves y qué productos te interesan. Sin compromiso." },
                { step: "02", title: "Lo hablamos", desc: "Te explicamos qué podemos ofrecerte, en qué cantidades y con qué frecuencia. Adaptamos la propuesta a ti." },
                { step: "03", title: "Empezamos", desc: "Acordamos los detalles y empezamos a trabajar juntos. Producto fresco para tu local, cada día." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col gap-5">
                  <span className="font-display text-5xl font-semibold" style={{ color: "var(--accent)", opacity: 0.3 }}>{step}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl text-primary font-semibold">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 px-6 md:px-16 bg-primary">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
                ¿Hablamos?
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                Estamos a un mensaje de distancia. Escríbenos por WhatsApp y te respondemos en el mismo día.
              </p>
            </div>
            <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded text-sm font-medium hover:opacity-90 transition-opacity shrink-0">
              <MessageCircle size={18} /> Contactar por WhatsApp
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <span className="font-display text-xl text-primary font-semibold">Miriam Bakery</span>
            <p className="text-muted-foreground text-sm mt-1">© 2026 · Calle Juan Jiménez Cuenca, 23, Lucena</p>
          </div>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Volver a la web
          </Link>
        </div>
      </footer>

    </div>
  );
}
