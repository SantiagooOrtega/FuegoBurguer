"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuItem, formatCOP } from "../lib/menu-data";

type Props = {
  item: MenuItem;
};

const tagLabels: Record<string, { label: string; color: string }> = {
  res: { label: "Res", color: "bg-fuego-red/20 text-fuego-red border-fuego-red/30" },
  pollo: { label: "Pollo", color: "bg-yellow-900/30 text-yellow-400 border-yellow-700/30" },
  cerdo: { label: "Cerdo", color: "bg-orange-900/30 text-orange-400 border-orange-700/30" },
  smash: { label: "Smash", color: "bg-purple-900/30 text-purple-400 border-purple-700/30" },
};

export default function MenuCard({ item }: Props) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article
      className="group bg-fuego-gray-dark rounded-2xl overflow-hidden border border-fuego-gray-mid hover:border-fuego-red/50 transition-all duration-300 flex flex-col"
      aria-label={item.name}
    >
      {/* Imagen */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-fuego-gray-mid">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.discount && (
          <div className="absolute top-3 left-3 bg-fuego-red text-white text-xs font-bold rounded-full px-2.5 py-1">
            -{item.discount}%
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Nombre + tags */}
        <div>
          <h3 className="font-bold text-white text-base leading-tight">
            {item.name}
          </h3>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs border rounded-full px-2 py-0.5 font-medium ${
                    tagLabels[tag]?.color ?? "bg-gray-800 text-gray-400 border-gray-700"
                  }`}
                >
                  {tagLabels[tag]?.label ?? tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Descripción */}
        <p className="text-fuego-text-muted text-xs leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Precio + botón */}
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex flex-col">
            <span className="text-white font-black text-lg leading-none">
              {formatCOP(item.price)}
            </span>
            {item.originalPrice && (
              <span className="text-fuego-text-muted text-xs line-through">
                {formatCOP(item.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            aria-label={`Agregar ${item.name} al pedido`}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200 ${
              added
                ? "bg-green-600 text-white scale-95"
                : "bg-fuego-red hover:bg-fuego-red-dark text-white active:scale-95"
            }`}
          >
            {added ? (
              <>
                <span aria-hidden="true">✓</span>
                Agregado
              </>
            ) : (
              <>
                <span aria-hidden="true">+</span>
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
