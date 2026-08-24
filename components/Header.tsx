"use client";

import Image from "next/image";
import { LOGO_URL } from "../lib/menu-data";

// Foto de Westcol — fundador de Fuego Burger (vía Agencia PI)
const BG_URL =
  "https://www.agenciapi.co/sites/default/files/styles/imagen_principal_contenidos_2021/public/2025-10/Solo%20me%20queda%20agradecerles%20por%20confiar%20en%20m%C3%AD%20Trato%20siempre%20de%20darles%20lo%20mejor%20Espero%20que%20se%20haya%283%29%281%29.jpg.webp?h=2a8b1677&itok=7J3rixcM";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden" style={{ minHeight: 420 }}>

      {/* ── Foto de fondo ── */}
      <Image
        src={BG_URL}
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover object-[60%_30%]"
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

      {/* ── Logo esquina superior izquierda ── */}
      <div className="absolute top-5 left-5 z-20 w-14 h-14 drop-shadow-[0_0_20px_rgba(204,0,0,0.7)]">
        <Image
          src={LOGO_URL}
          alt="Fuego Burger logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ── Contenido centrado: solo texto ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-12 pb-14 flex flex-col items-center text-center gap-5">
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

        {/* Logo debajo del horario */}
        <div className="w-20 h-20 relative drop-shadow-[0_0_28px_rgba(204,0,0,0.7)]">
          <Image
            src={LOGO_URL}
            alt="Fuego Burger logo"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>

      {/* ── Degradado inferior para transición suave al body ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-fuego-black to-transparent" />
    </header>
  );
}
