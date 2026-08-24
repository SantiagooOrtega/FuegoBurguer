"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { formatCOP } from "../lib/menu-data";
import { useEffect, useRef, useState } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, increase, decrease, remove, total, clear } =
    useCart();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [ordered, setOrdered] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeCart]);

  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function handleOrder() {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      clear();
      closeCart();
    }, 2500);
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={closeCart}
        className="fixed inset-0 bg-black/70 z-50 animate-fade-in"
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        className="fixed top-0 right-0 h-full w-full max-w-md bg-fuego-gray-dark z-50 flex flex-col shadow-2xl animate-slide-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-fuego-gray-mid">
          <h2 className="text-white font-black text-lg flex items-center gap-2">
            Tu pedido
            {items.length > 0 && (
              <span className="bg-fuego-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-fuego-text-muted hover:text-white transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        {ordered ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white font-bold text-xl text-center">¡Pedido realizado!</p>
            <p className="text-fuego-text-muted text-sm text-center">
              Tu pedido fue registrado. Pronto nos comunicamos contigo.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3D3D3D" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p className="text-fuego-text-muted text-sm">
              Tu carrito está vacío.<br />Agrega algo del menú.
            </p>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 bg-fuego-gray-mid rounded-xl p-3 items-center"
              >
                {/* Imagen */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">
                    {item.name}
                  </p>
                  <p className="text-fuego-red text-sm font-bold mt-0.5">
                    {formatCOP(item.price * item.quantity)}
                  </p>
                </div>

                {/* Controles cantidad */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrease(item.id)}
                    aria-label={`Quitar uno de ${item.name}`}
                    className="w-7 h-7 rounded-full border border-fuego-gray-light text-white flex items-center justify-center hover:border-fuego-red hover:text-fuego-red transition-colors text-lg leading-none"
                  >
                    −
                  </button>
                  <span className="text-white font-bold text-sm w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increase(item.id)}
                    aria-label={`Agregar otro de ${item.name}`}
                    className="w-7 h-7 rounded-full border border-fuego-gray-light text-white flex items-center justify-center hover:border-fuego-red hover:text-fuego-red transition-colors text-lg leading-none"
                  >
                    +
                  </button>
                </div>

                {/* Eliminar */}
                <button
                  onClick={() => remove(item.id)}
                  aria-label={`Eliminar ${item.name}`}
                  className="text-fuego-text-muted hover:text-fuego-red transition-colors ml-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Footer con total y CTA */}
        {!ordered && items.length > 0 && (
          <div className="border-t border-fuego-gray-mid px-5 py-5 flex flex-col gap-4">
            {/* Desglose */}
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between text-fuego-text-muted">
                <span>Subtotal</span>
                <span>{formatCOP(total)}</span>
              </div>
              <div className="flex justify-between text-fuego-text-muted">
                <span>Domicilio</span>
                <span className="text-green-400 font-medium">Calculado al confirmar</span>
              </div>
              <div className="flex justify-between text-white font-black text-base mt-1 pt-2 border-t border-fuego-gray-mid">
                <span>Total</span>
                <span>{formatCOP(total)}</span>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-fuego-red hover:bg-fuego-red-dark active:scale-95 transition-all text-white font-black py-3.5 rounded-xl text-base"
            >
              Confirmar pedido · {formatCOP(total)}
            </button>

            <button
              onClick={clear}
              className="w-full text-fuego-text-muted hover:text-white text-xs transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>

      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.32, 0.72, 0, 1);
        }
      `}</style>
    </>
  );
}
