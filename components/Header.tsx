"use client";

import Image from "next/image";
import { LOGO_URL } from "../lib/menu-data";

export default function Header() {
  return (
    <header className="relative w-full bg-fuego-black overflow-hidden">
      {/* Fondo con gradiente de llamas */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, #CC0000 0%, #660000 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <div className="w-24 h-24 relative">
          <Image
            src={LOGO_URL}
            alt="Fuego Burger logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Nombre */}
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
            FUEGO{" "}
            <span className="text-fuego-red">BURGER</span>
          </h1>
          <p className="mt-2 text-fuego-text-muted text-sm tracking-widest uppercase">
            Hamburguesas artesanales · Colombia
          </p>
        </div>

        {/* Badge de estado */}
        <div className="flex items-center gap-2 bg-fuego-gray-dark border border-fuego-gray-light rounded-full px-4 py-1.5 text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-fuego-text-light">
            Abre hoy a las{" "}
            <strong className="text-white">11:30 am</strong>
          </span>
        </div>

        {/* Descuento banner */}
        <div className="inline-flex items-center gap-2 bg-fuego-red rounded-lg px-5 py-2">
          <span className="text-white font-bold text-sm">
            🔥 10% de descuento en toda la carta hoy
          </span>
        </div>
      </div>
    </header>
  );
}
