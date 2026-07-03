import { Link, useParams } from "react-router";
import { ArrowLeft, MessageCircle, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

import carnivalCakeImg from "@/imports/3.png";
import cheesecakeImg from "@/imports/501b5b58-d1c8-4f54-b27b-404817814f61.png";
import croissantsImg from "@/imports/2.png";
import cherryCakeImg from "@/imports/Dise_o_sin_t_tulo__8_.png";
import eventCakeImg from "@/imports/31.png";
import ig1Img from "@/imports/Dise_o_sin_t_tulo__3_.png";
import ig2Img from "@/imports/Dise_o_sin_t_tulo__2_.png";
import lemonCakeImg from "@/imports/e1b2ce71-cd5e-45c2-8069-f9395229e96c-e1778170199337-819x1024.png";
import img4161 from "@/imports/IMG_4161.png";
import img4159 from "@/imports/IMG_4159.png";
import img4158 from "@/imports/IMG_4158.png";
import img4143 from "@/imports/IMG_4143.png";
import img4144 from "@/imports/IMG_4144.png";
import img4145 from "@/imports/IMG_4145.png";
import img4146 from "@/imports/IMG_4146.png";
import img4147 from "@/imports/IMG_4147.png";
import img4148 from "@/imports/IMG_4148.png";
import img4150 from "@/imports/IMG_4150.png";
import img4149 from "@/imports/IMG_4149.png";
import img4151 from "@/imports/IMG_4151.png";
import img4154 from "@/imports/IMG_4154.png";
import img4153 from "@/imports/IMG_4153.png";
import img4152 from "@/imports/IMG_4152.png";
import img4157 from "@/imports/IMG_4157.png";
import img4156 from "@/imports/IMG_4156.png";

type ProductInfo = {
  label: string;
  description: string;
  photos: { src: string; alt: string }[];
};

const catalog: Record<string, ProductInfo> = {
  tartas: {
    label: "Tartas",
    description: "Tartas artesanales elaboradas con ingredientes naturales, sin aceite de palma. Cada tarta es única, horneada a diario con pasión.",
    photos: [
      { src: img4161, alt: "Tarta de manzana, dulce de leche y merengue con espiral tostada" },
      { src: img4159, alt: "Carrot Cake con decoración rosa y número 2" },
      { src: img4158, alt: "Tarta de kinder con balón de fútbol y nata verde" },
      { src: img4143, alt: "Tarta de Primera Comunión blanca con figurita y texto" },
      { src: img4144, alt: "Tarta de chocolate y baileys rosa con flores de nata" },
      { src: img4145, alt: "Tarta de Chocolate Dubái rectangular con Happy Birthday" },
      { src: img4146, alt: "Tarta con crema de café y decoración vegetal, dos vistas" },
      { src: img4147, alt: "Tarta carrot cake con decoración de Dragon Ball" },
      { src: img4148, alt: "Red velvet blanca con fresas y arándanos frescos" },
      { src: img4150, alt: "Tarta de zanahoria con chocolate blanco, sin gluten" },
      { src: img4149, alt: "Tarta de piononos con merengue tostado en capas" },
      { src: img4151, alt: "Tarta rosa con corazones rojos y decoración de nata" },
      { src: img4154, alt: "Tarta de kinder con arcoíris y decoración pastel número 1" },
      { src: img4153, alt: "Red velvet blanca con moras frescas y menta" },
      { src: img4152, alt: "Carrot cake con frutos secos, naranja deshidratada y nata" },
      { src: img4157, alt: "Tarta de zanahoria blanca con cerezas y nata rizadas" },
      { src: img4156, alt: "Tarta Dragon Ball naranja y azul con figura de Goku" },
      { src: cherryCakeImg, alt: "Tarta blanca con nata y cerezas frescas" },
      { src: eventCakeImg, alt: "Tarta elegante blanca con velas y flores para evento" },
      { src: ig2Img, alt: "Tarta de cumpleaños azul con ositos de peluche" },
      { src: carnivalCakeImg, alt: "Tarta de cumpleaños colorida con máscara de carnaval" },
    ],
  },
  "tartas-de-queso": {
    label: "Tartas de Queso",
    description: "Nuestra tarta de queso es cremosa, con un interior suave y un exterior tostado al horno en su punto justo. Una de nuestras especialidades más queridas.",
    photos: [
      { src: cheesecakeImg, alt: "Tarta de queso al horno con corte perfecto mostrando el interior cremoso" },
    ],
  },
  bolleria: {
    label: "Bollería",
    description: "Bollería artesanal horneada cada mañana. Croissants, bizcochos y mucho más elaborados con mantequilla de calidad y sin aceite de palma.",
    photos: [
      { src: croissantsImg, alt: "Pila de croissants de chocolate sobre plato blanco" },
      { src: ig1Img, alt: "Croissants de chocolate apilados, vista de cerca" },
      { src: lemonCakeImg, alt: "Bizcocho glaseado de limón cortado sobre tabla de madera" },
    ],
  },
};

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? catalog[slug] : null;
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight" && product) setLightboxIdx((i) => Math.min((i ?? 0) + 1, product.photos.length - 1));
      if (e.key === "ArrowLeft") setLightboxIdx((i) => Math.max((i ?? 0) - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 font-sans">
        <p className="text-muted-foreground">Categoría no encontrada.</p>
        <Link to="/" className="text-sm text-primary underline underline-offset-4">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between gap-4">
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

      <main className="max-w-6xl mx-auto px-6 md:px-16 py-16 flex flex-col gap-14">

        {/* ── TITLE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
            Nuestros productos
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-primary font-semibold">{product.label}</h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mt-1">{product.description}</p>
        </div>

        {/* ── PHOTO GRID ── */}
        {product.photos.length === 1 ? (
          // Single photo — centered, larger
          <div className="flex justify-center">
            <button
              onClick={() => setLightboxIdx(0)}
              className="group w-full max-w-xl rounded-2xl overflow-hidden bg-muted border border-border hover:shadow-lg transition-shadow cursor-zoom-in"
            >
              <ImageWithFallback
                src={product.photos[0].src}
                alt={product.photos[0].alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          </div>
        ) : (
          <div className={`grid gap-4 ${product.photos.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
            {product.photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="group rounded-2xl overflow-hidden bg-muted border border-border hover:shadow-lg transition-shadow cursor-zoom-in text-left"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ── CTA ── */}
        <div className="border-t border-border pt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <p className="font-display text-2xl text-primary font-semibold">¿Te apetece alguno?</p>
            <p className="text-muted-foreground mt-1">Pídenos información o haz tu pedido por WhatsApp.</p>
          </div>
          <a href="https://wa.me/34622472171" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity shrink-0">
            <MessageCircle size={16} /> Contactar por WhatsApp
          </a>
        </div>
      </main>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={product.photos[lightboxIdx].src}
              alt={product.photos[lightboxIdx].alt}
              className="w-full rounded-xl object-contain max-h-[80vh]"
            />
            {/* Prev / Next */}
            {product.photos.length > 1 && (
              <div className="absolute inset-y-0 inset-x-0 flex items-center justify-between px-3 pointer-events-none">
                <button
                  className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition disabled:opacity-30"
                  onClick={() => setLightboxIdx((i) => Math.max((i ?? 0) - 1, 0))}
                  disabled={lightboxIdx === 0}
                >
                  ‹
                </button>
                <button
                  className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition disabled:opacity-30"
                  onClick={() => setLightboxIdx((i) => Math.min((i ?? 0) + 1, product.photos.length - 1))}
                  disabled={lightboxIdx === product.photos.length - 1}
                >
                  ›
                </button>
              </div>
            )}
            {/* Close */}
            <button
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
              onClick={() => setLightboxIdx(null)}
            >
              ✕
            </button>
            <p className="text-center text-white/50 text-xs mt-3">{lightboxIdx + 1} / {product.photos.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
