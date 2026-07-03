import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Moon, Sun, MapPin, Clock, Phone, MessageCircle, Leaf, Cake } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

import heroImg from "@/imports/4.png";
import miriamImg from "@/imports/image.png";
import cherryCakeImg from "@/imports/Dise_o_sin_t_tulo__8_.png";
import carnivalCakeImg from "@/imports/Dise_o_sin_t_tulo__10_.png";
import cheesecakeImg from "@/imports/501b5b58-d1c8-4f54-b27b-404817814f61.png";
import croissantsImg from "@/imports/Dise_o_sin_t_tulo__9_.png";
import eventCakeImg from "@/imports/31.png";
import brownieImg from "@/imports/IMG_4119.png";
import heladosImg from "@/imports/image-6.png";
import ig1Img from "@/imports/Dise_o_sin_t_tulo__3_.png";
import ig2Img from "@/imports/Dise_o_sin_t_tulo__2_.png";

// ── CARTA DATA ───────────────────────────────────────────────────────────────

const cartaTabs = [
  {
    id: "empanadas", label: "Empanadas", emoji: "🥟",
    nota: "Por encargo · Mediana 6 u. / Grande 12 u.",
    grupos: [
      {
        nombre: "",
        items: [
          { nombre: "La Gallega Tradicional", desc: "Pollo y atún", mediana: "7,50€", grande: "19€" },
          { nombre: "La Completa", desc: "Tomate, jamón, bacón y queso", mediana: "8,50€", grande: "22€" },
          { nombre: "La Italiana", desc: "Pollo, pesto y mozzarella", mediana: "8,50€", grande: "22€" },
          { nombre: "Pollo con Champiñones", desc: "", mediana: "8,95€", grande: "22€" },
          { nombre: "Pollo Yakitori", desc: "", mediana: "9,50€", grande: "22€" },
          { nombre: "La Huerta", desc: "Vegetal", mediana: "7,90€", grande: "19€" },
        ],
      },
    ],
  },
  {
    id: "helados", label: "Helados", emoji: "🍦",
    grupos: [
      { nombre: "Clásicos", items: ["Vainilla bourbon madagascar", "Chocolate grand cru 70%", "Stracciatella", "Dulce de leche argentino", "Galleta Oreo", "Galleta Lotus", "Happy Hippo", "Snickers", "Chocolate blanco con brownie y filipinos", "Colacao con galleta María"] },
      { nombre: "Frutales", items: ["Fresa natural", "Mango", "Limón"] },
      { nombre: "Especiales", items: ["Pistacho manchego gran selección", "Cheesecake", "Caramelo & flor de sal", "Turrón jijona D.O. suprema", "Leche merengada"] },
    ],
  },
  {
    id: "cafes", label: "Cafés", emoji: "☕",
    grupos: [{ nombre: "", items: ["Café espresso", "Café doble espresso", "Americano", "Cortado", "Café con leche", "Manchado", "Mocca", "Café descafeinado", "Descafeinado de sobre", "Carajillo", "Café helado de vainilla", "Café helado de caramelo", "Mocha frío", "Frappino"] }],
  },
  {
    id: "calientes", label: "Bebidas calientes", emoji: "🍵",
    grupos: [{ nombre: "", items: ["Té (verde, rojo, chai, mate)", "Manzanilla", "Menta poleo", "Rooibos", "ColaCao", "Leche caliente"] }],
  },
  {
    id: "zumos", label: "Zumos & Smoothies", emoji: "🍊",
    grupos: [{ nombre: "", items: ["Naranja", "Mango, naranja y papaya", "Limonada", "Fresa y plátano", "Piña colada"] }],
  },
  {
    id: "mas", label: "Y más…", emoji: "🍹",
    grupos: [{ nombre: "", items: ["Batido", "Refrescos y Aquarius", "Nestea y Tónica", "Cerveza", "Baileys", "Tía María", "Mojito"] }],
  },
];

function CartaSection() {
  const [active, setActive] = useState("empanadas");
  const tab = cartaTabs.find((t) => t.id === active)!;
  const isEmpanadas = active === "empanadas";

  return (
    <section id="carta" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Lo que servimos</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Nuestra Carta</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {cartaTabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${active === t.id ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"}`}>
              <span>{t.emoji}</span>{t.label}
            </button>
          ))}
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          {isEmpanadas ? (
            <div className="flex flex-col gap-6">
              {(tab as any).nota && (
                <p className="text-xs uppercase tracking-widest font-medium pb-4 border-b border-border" style={{ color: "var(--accent)" }}>
                  {(tab as any).nota}
                </p>
              )}
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 text-xs uppercase tracking-widest text-muted-foreground font-medium pb-2 border-b border-border">
                <span>Empanada</span>
                <span className="text-right">Mediana (6 u.)</span>
                <span className="text-right">Grande (12 u.)</span>
              </div>
              {(tab.grupos[0].items as any[]).map((item) => (
                <div key={item.nombre} className="grid grid-cols-[1fr_auto_auto] gap-x-6 items-baseline py-2 border-b border-border last:border-0">
                  <div>
                    <p className="text-primary font-medium text-sm">{item.nombre}</p>
                    {item.desc && <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>}
                  </div>
                  <span className="text-sm font-semibold text-primary tabular-nums">{item.mediana}</span>
                  <span className="text-sm font-semibold text-primary tabular-nums">{item.grande}</span>
                </div>
              ))}
            </div>
          ) : tab.grupos.length === 1 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
              {(tab.grupos[0].items as string[]).map((item) => (
                <li key={item} className="flex items-center gap-3 py-1 border-b border-border">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {tab.grupos.map((grupo) => (
                <div key={grupo.nombre} className="flex flex-col gap-4">
                  <h3 className="font-display text-lg text-primary font-semibold border-b border-border pb-3">{grupo.nombre}</h3>
                  <ul className="flex flex-col gap-2">
                    {(grupo.items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "var(--accent)" }} />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Quién soy?", href: "#quien-soy" },
  { label: "Carta", href: "#carta" },
  { label: "Para Negocios", href: "#negocios" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

// ── PRODUCT CARDS ─────────────────────────────────────────────────────────────

const productCards = [
  { slug: "tartas", img: carnivalCakeImg, alt: "Tarta de cumpleaños con arcoíris y decoración pastel", label: "Tartas" },
  { slug: "tartas-de-queso", img: cheesecakeImg, alt: "Tarta de queso al horno con corte perfecto", label: "Tartas de Queso" },
  { slug: "bolleria", img: croissantsImg, alt: "Pila de croissants de chocolate sobre plato", label: "Bollería" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased" style={{ scrollBehavior: "smooth" }}>

      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between gap-8">
          <a href="#inicio" className="font-display text-xl md:text-2xl text-primary font-semibold tracking-tight shrink-0">
            Miriam Bakery
          </a>
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => setDark(!dark)} aria-label="Cambiar tema" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded hover:opacity-90 transition-opacity">
              WhatsApp
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background border-t border-border">
              <nav className="flex flex-col px-6 py-4 gap-0">
                {navLinks.map((link) => (
                  <button key={link.href} onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    className="py-3.5 text-left text-foreground hover:text-accent border-b border-border last:border-0 transition-colors text-sm">
                    {link.label}
                  </button>
                ))}
                <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-5 py-3.5 rounded">
                  WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src={heroImg} alt="Interior de Miriam Bakery con mesa de bienvenida y flores" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/75 dark:bg-background/85" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-20 w-full">
            <motion.div className="flex flex-col gap-7 max-w-xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Artesanal · Lucena · Sin aceite de palma</span>
              <h1 className="font-display text-5xl md:text-[4.5rem] text-primary leading-[1.03] font-semibold">
                Horneado<br /><em className="not-italic" style={{ color: "var(--accent)" }}>artesanal</em><br />cada día
              </h1>
              <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">Sabor auténtico y natural en Lucena. Ingredientes de verdad, elaborados con pasión.</p>
              <div className="flex items-center gap-4 pt-1">
                <button onClick={() => scrollTo("#productos")} className="bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity">Ver carta</button>
                <button onClick={() => scrollTo("#quien-soy")} className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">Conoce la historia</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUIÉN SOY ── */}
        <section id="quien-soy" className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <ImageWithFallback src={miriamImg} alt="Miriam, propietaria de Miriam Bakery, sonriendo con un ramo de flores" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-border -z-10" />
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Nuestra historia</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">¿Quién soy?</h2>
              <p className="text-muted-foreground leading-relaxed">En Miriam Bakery, horneamos diariamente con pasión y dedicación. Creemos en los ingredientes naturales y en los procesos artesanales.</p>
              <p className="text-muted-foreground leading-relaxed">Ven a disfrutar de nuestro acogedor espacio en Lucena, donde el aroma a pan recién horneado y café de especialidad te harán sentir como en casa.</p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit" style={{ background: "rgba(184,114,42,0.1)", color: "var(--accent)" }}>
                <Leaf size={14} /> Sin aceite de palma
              </span>
            </div>
          </div>
        </section>

        {/* ── CARTA ── */}
        <CartaSection />

        {/* ── B2B ── */}
        <section id="negocios" className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex flex-col gap-5 max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Para negocios</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">
                ¿Quieres ofrecer pastelería artesanal en tu local?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Colaboramos con cafeterías, bares y restaurantes que quieren distinguirse ofreciendo productos de calidad real. Sin aceite de palma, horneados a diario.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/colabora"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-medium hover:opacity-90 transition-opacity">
                Ver cómo colaborar →
              </Link>
            </div>
          </div>
        </section>

        {/* ── NOVEDADES ── */}
        <section className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Actualidad</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Novedades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { img: brownieImg, alt: "Jueves de Brownies — brownies de chocolate por 3,5€ bebida incluida", title: "Jueves de Brownies", desc: "Brownies irresistibles por solo 3,5€ (bebida incluida). ¡Solo los jueves!", tag: "Oferta semanal" },
                { img: heladosImg, alt: "Oferta de helados todos los jueves — cono pequeño 1,5€", title: "Jueves de Helados", desc: "Cono pequeño por solo 1,5€. ¡Todos los jueves!", tag: "Oferta semanal" },
              ].map((item) => (
                <div key={item.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                  <div className="w-full sm:w-2/5 flex-shrink-0 overflow-hidden" style={{ minHeight: 200 }}>
                    <ImageWithFallback src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex flex-col gap-3 justify-center">
                    <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--accent)" }}>{item.tag}</span>
                    <h3 className="font-display text-2xl text-primary font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTOS ── */}
        <section id="productos" className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="text-center flex flex-col gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Lo que hacemos</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Nuestros Productos</h2>
              <p className="text-muted-foreground mt-1">Elaborados a mano, horneados con cariño.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {productCards.map(({ slug, img, alt, label }) => (
                <Link to={`/productos/${slug}`} key={slug}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                    <ImageWithFallback src={img} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="font-display text-lg text-primary font-semibold">{label}</span>
                    <span className="text-xs font-medium group-hover:underline underline-offset-2 transition-all" style={{ color: "var(--accent)" }}>Ver fotos →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TARTAS PERSONALIZADAS ── */}
        <section id="eventos" className="py-24 px-6 md:px-16 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative flex-shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <ImageWithFallback src={eventCakeImg} alt="Tarta elegante blanca sobre mesa con velas y flores secas para evento especial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-border -z-10" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Eventos especiales</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">
                Momentos especiales,<br />tartas <em className="not-italic" style={{ color: "var(--accent)" }}>inolvidables</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Creamos tartas personalizadas para bodas, cumpleaños y eventos especiales. Cuéntanos tu idea y diseñaremos una tarta única que será el centro de atención.</p>
              <ul className="flex flex-col gap-4">
                {["Diseños exclusivos a medida", "Para cualquier tipo de evento", "Ingredientes naturales sin aceite de palma"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Cake size={16} className="shrink-0" style={{ color: "var(--accent)" }} /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit">
                Pide tu tarta por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center text-center">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Instagram</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Síguenos en el día a día</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {[
                { img: ig1Img, alt: "Croissants de chocolate apilados — foto de Instagram de Miriam Bakery" },
                { img: ig2Img, alt: "Tarta de cumpleaños azul con ositos de peluche — foto de Instagram de Miriam Bakery" },
                { img: carnivalCakeImg, alt: "Tarta colorida de carnaval — foto de Instagram de Miriam Bakery" },
                { img: cheesecakeImg, alt: "Tarta de queso al horno — foto de Instagram de Miriam Bakery" },
              ].map(({ img, alt }, i) => (
                <a key={i} href="https://www.instagram.com/miriambakery.es" target="_blank" rel="noopener noreferrer"
                  className="aspect-square rounded-xl overflow-hidden hover:opacity-80 transition-opacity">
                  <ImageWithFallback src={img} alt={alt} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
            <a href="https://www.instagram.com/miriambakery.es" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded text-sm font-medium hover:bg-muted transition-colors">
              @miriambakery.es en Instagram
            </a>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>Visítanos</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">Ven a<br />visitarnos</h2>
              <p className="text-muted-foreground leading-relaxed">Estaremos encantados de atenderte. Siéntate, pide un café y disfruta del momento.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Calle+Juan+Jim%C3%A9nez+Cuenca,+23,+14900+Lucena,+C%C3%B3rdoba,+Spain"
                target="_blank" rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit">
                Cómo llegar
              </a>
            </div>
            <div className="flex flex-col gap-7">
              {[
                { icon: <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />, title: "Dirección", lines: ["Calle Juan Jiménez Cuenca, 23", "Lucena, 14900", "Frente a la Parroquia de Santo Domingo"] },
                { icon: <Clock size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />, title: "Horario", lines: ["Mar – Sáb: 8:00–14:00 | 16:30–20:30", "Domingo: 9:00–14:00", "Lunes: cerrado"] },
                { icon: <Phone size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />, title: "Teléfono", lines: ["+34 622 472 171"] },
              ].map(({ icon, title, lines }) => (
                <div key={title} className="flex gap-4">
                  {icon}
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-primary text-sm">{title}</p>
                    {lines.map((l) => <p key={l} className="text-muted-foreground text-sm">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
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
          <div className="flex gap-8">
            {["Privacidad", "Aviso Legal", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FAB ── */}
      <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        style={{ background: "#25D366" }}>
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}
