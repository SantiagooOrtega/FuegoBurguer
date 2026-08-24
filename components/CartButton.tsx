"use client";

import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { count, total, openCart } = useCart();

  if (count === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label={`Ver carrito, ${count} productos`}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-fuego-red hover:bg-fuego-red-dark active:scale-95 transition-all text-white font-bold rounded-2xl px-6 py-3.5 flex items-center gap-3 shadow-lg shadow-fuego-red/30 animate-slide-up"
    >
      {/* Icono carrito */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      <span className="flex items-center gap-2">
        <span className="bg-white/20 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
        Ver pedido
      </span>

      <span className="font-black text-sm border-l border-white/30 pl-3">
        {new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(total)}
      </span>
    </button>
  );
}
