"use client";

import { categories } from "../lib/menu-data";

type Props = {
  active: string;
  onChange: (id: string) => void;
};

const icons: Record<string, string> = {
  combos: "🍔",
  hamburguesas: "🥩",
  acompanantes: "🍟",
};

export default function CategoryNav({ active, onChange }: Props) {
  return (
    <nav
      className="sticky top-0 z-40 bg-fuego-black border-b border-fuego-gray-mid"
      aria-label="Categorías del menú"
    >
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex gap-0 overflow-x-auto scrollbar-none" role="tablist">
          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <li key={cat.id} role="none">
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onChange(cat.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? "border-fuego-red text-fuego-red"
                      : "border-transparent text-fuego-text-muted hover:text-white"
                  }`}
                >
                  <span aria-hidden="true">{icons[cat.id]}</span>
                  {cat.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
