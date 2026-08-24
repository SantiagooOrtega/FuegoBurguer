"use client";

import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("combos");

  return (
    <div className="min-h-screen bg-fuego-black flex flex-col">
      <Header />
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />
      <main className="flex-1">
        <MenuSection activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}
