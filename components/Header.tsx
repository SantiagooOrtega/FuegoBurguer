"use client";

import Image from "next/image";
import { LOGO_URL } from "../lib/menu-data";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden bg-fuego-black">
      {/* Textura de fondo: patrón de rombos tipo mosaico de barrio */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradiente rojo desde abajo — como brasa */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(140,0,0,0.35) 0%, rgba(80,0,0,0.15) 40%, transparent 75%)",
        }}
      />

      {/* Línea decorativa superior — detalle de marca */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-fuego-red" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-10 pb-12 flex flex-col items-center text-center gap-5">

        {/* Logo */}
        <div className="w-20 h-20 relative drop-shadow-[0_4px_24px_rgba(204,0,0,0.5)]">
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
          {/* Línea separadora tipo sello */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-fuego-gray-light" />
            <p className="text-fuego-text-muted text-xs tracking-[0.25em] uppercase font-medium">
              Hamburguesas artesanales · Colombia
            </p>
            <span className="h-px w-10 bg-fuego-gray-light" />
          </div>
        </div>

        {/* Estado */}
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-fuego-text-light">
            Abre hoy a las{" "}
            <strong className="text-white">11:30 am</strong>
          </span>
        </div>

      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-fuego-gray-mid" />
    </header>
  );
}
