"use client";

import { menuItems, categories } from "../lib/menu-data";
import MenuCard from "./MenuCard";

type Props = {
  activeCategory: string;
};

export default function MenuSection({ activeCategory }: Props) {
  const filtered = menuItems.filter((i) => i.category === activeCategory);
  const label = categories.find((c) => c.id === activeCategory)?.label ?? "";

  return (
    <section
      aria-labelledby="menu-heading"
      className="max-w-5xl mx-auto px-4 py-8"
    >
      <h2
        id="menu-heading"
        className="text-2xl font-black text-white mb-6 flex items-center gap-3"
      >
        <span className="w-1 h-7 bg-fuego-red rounded-full inline-block" />
        {label}
        <span className="text-fuego-text-muted font-normal text-base">
          ({filtered.length})
        </span>
      </h2>

      {filtered.length === 0 ? (
        <p className="text-fuego-text-muted text-center py-16">
          No hay productos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
