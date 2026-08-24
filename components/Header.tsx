"use client";

import Image from "next/image";
import { LOGO_URL } from "../lib/menu-data";

// Foto de calle bogotana nocturna — Unsplash (licencia libre)
const BG_URL =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden" style={{ minHeight: 340 }}>

      {/* ── Foto de fondo ── */}
      <Image
        src={BG_URL}
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Capa 1: oscurecer fuerte para que el contenido destaque ── */}
      <div className="absolute inset-0 bg-black/75" />

      {/* ── Capa 2: viñeta roja sutil desde abajo, como brasa ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(120,0,0,0.55) 0%, rgba(60,0,0,0.2) 35%, transparent 65%)",
        }}
      />

      {/* ── Capa 3: grano de película para dar textura premium ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Línea roja superior — sello de marca ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-fuego-red z-10" />

      {/* ── Contenido ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-12 pb-14 flex flex-col items-center text-center gap-5">

        {/* Logo con halo rojo */}
        <div className="w-20 h-20 relative drop-shadow-[0_0_28px_rgba(204,0,0,0.6)]">
          <Image
            src={LOGO_URL}
            alt="Fuego Burger logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Nombre */}
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
            FUEGO <span className="text-fuego-red">BURGER</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-white/20" />
            <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-medium">
              Hamburguesas artesanales · Colombia
            </p>
            <span className="h-px w-10 bg-white/20" />
          </div>
        </div>

        {/* Estado */}
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-white/60">
            Abre hoy a las{" "}
            <strong className="text-white">11:30 am</strong>
          </span>
        </div>

      </div>

      {/* ── Degradado inferior para transición suave al body ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-fuego-black to-transparent" />
    </header>
  );
}
