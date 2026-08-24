export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: "combos" | "hamburguesas" | "acompanantes";
  tags?: string[];
};

export const LOGO_URL =
  "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/206e0a93-d12f-4edb-b1e0-30e02ac8938a_eebcaba0b8.webp";

export const menuItems: MenuItem[] = [
  // COMBOS
  {
    id: "combo-clasica",
    name: "Combo Clásica",
    description:
      "Pan brioche, carne de res 150 g, queso cheddar, cebolla caramelizada, lechuga, tomate, BBQ maple y mayonesa de pimentón. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 35010,
    originalPrice: 38900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/ac61e073-0680-4cfb-bfff-f9fdd41e2ac9_7e727c6fc0.webp",
    category: "combos",
    tags: ["res"],
  },
  {
    id: "combo-bandida",
    name: "Combo Bandida",
    description:
      "Pan brioche, carne de res 150 g, queso Philadelphia, queso cheddar, tocineta caramelizada en BBQ maple, lechuga, tomate, BBQ maple y mayonesa de pimentón. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 38610,
    originalPrice: 42900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/d4be8ed0-8292-477b-a430-d1d480f6eac1_5f3ae4831b.webp",
    category: "combos",
    tags: ["res"],
  },
  {
    id: "combo-pampara",
    name: "Combo Pámpara",
    description:
      "Pan brioche, filete de pechuga apanado en panko 150 g, queso mozzarella, sour cream de ajo, tocineta caramelizada en BBQ maple, lechuga, tomate, BBQ maple y mayonesa de pimentón. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 35910,
    originalPrice: 39900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/3538a6b1-b9a4-4a4a-aa9b-03fe7dd291cb_b1fb891455.webp",
    category: "combos",
    tags: ["pollo"],
  },
  {
    id: "combo-la-w",
    name: "Combo La W",
    description:
      "Combina el sabor de dos hamburguesas: pollo y carne, con un toque de BBQ picante. La combinación perfecta de sabores. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 43110,
    originalPrice: 47900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/edae0777-cf34-451b-a7f4-50eacedbfc87_05c006fd62.webp",
    category: "combos",
    tags: ["res", "pollo"],
  },
  {
    id: "combo-estrellita",
    name: "Combo La Estrellita",
    description:
      "Pan brioche, carne de res 150 g, queso Philadelphia, tocineta, reducción de frutos rojos, lechuga, tomate, mayonesa de pimentón y BBQ maple. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 42210,
    originalPrice: 46900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/d52753e0-97e7-47e5-9f40-9dee6202a85e_c3eef8dd15.webp",
    category: "combos",
    tags: ["res"],
  },
  {
    id: "combo-bomba",
    name: "Combo La Bomba",
    description:
      "Pan brioche, carne de res 150 g, doble queso cheddar, costilla de cerdo en miel de naranja, tocineta, cebolla crujiente, lechuga, tomate, salsa BBQ maple, mayonesa de pimentón y garlic. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 42210,
    originalPrice: 46900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/4b8cc015-24c9-4148-9e70-c85bffdbf6f5_a51ec0770d.webp",
    category: "combos",
    tags: ["res", "cerdo"],
  },
  {
    id: "combo-smash-plena",
    name: "Combo Smash La Plena",
    description:
      "Pan brioche, doble carne smash de 60 g cada una, queso cheddar entre las carnes, cebolla grillé (60 g) y salsa de la casa. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 32310,
    originalPrice: 35900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/f0e89552-1635-4d3e-aa30-e516f493607a_67bfc27b2a.webp",
    category: "combos",
    tags: ["res", "smash"],
  },
  {
    id: "combo-smash-cheddar",
    name: "Combo Smash La Cheddar",
    description:
      "Pan brioche, doble carne smash de 60 g, queso cheddar entre las carnes, cebolla grillé (60 g), salsa de la casa y bloque de queso apanado con mezcla de cheddar, parmesano y mozzarella. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 37710,
    originalPrice: 41900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/c5b9d6e6-0984-4d8b-ac47-7b193b404a4b_44de59539b.webp",
    category: "combos",
    tags: ["res", "smash"],
  },
  {
    id: "combo-smash-costenita",
    name: "Combo Smash La Costeñita",
    description:
      "Pan brioche, carne smash de chorizo ahumado (60 g) con cheddar derretido, 80 g de carne desmechada, BBQ maple, mayonesa de pimentón y 50 g de chips de plátano crujientes. Incluye papas y Coca-Cola.",
    price: 34110,
    originalPrice: 37900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/51848e77-aca6-4439-b78d-040033386399_a3e8430f91.webp",
    category: "combos",
    tags: ["res", "smash"],
  },
  {
    id: "combo-smash-maravilla",
    name: "Combo Smash La Maravilla",
    description:
      "Carne smash 50 g, pollo 70 g en BBQ, queso cheddar y salsa especial. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 34110,
    originalPrice: 37900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/b58837a5-c25a-426c-8c70-7d516516b0e4_8a0291810a.webp",
    category: "combos",
    tags: ["res", "pollo", "smash"],
  },
  {
    id: "combo-red-flag",
    name: "Combo La Red Flag",
    description:
      "Pan brioche, triple carne de res 80 g, queso cheddar, cebolla caramelizada, lechuga fresca, tomate, salsa BBQ maple y mayonesa de pimentón. Incluye papas a la francesa y Coca-Cola 400 ml.",
    price: 38610,
    originalPrice: 42900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/b7e0d781-3b6b-4614-8423-a7fe35cd4599_ff758100e9.webp",
    category: "combos",
    tags: ["res"],
  },

  // HAMBURGUESAS
  {
    id: "la-w",
    name: "La W",
    description:
      "Combina el sabor de dos hamburguesas: pollo y carne, con un toque de BBQ picante. La combinación perfecta de sabores.",
    price: 35010,
    originalPrice: 38900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/35651c0c-b4e8-47ed-9f5e-5d40bb8ef20a_dd490eceb2.webp",
    category: "hamburguesas",
    tags: ["res", "pollo"],
  },
  {
    id: "la-clasica",
    name: "La Clásica",
    description:
      "Pan brioche, carne de res 150 g, queso cheddar, cebolla caramelizada, lechuga, tomate, BBQ maple y mayonesa de pimentón. Puedes elegir cebolla caramelizada, crujiente o blanca cruda.",
    price: 26910,
    originalPrice: 29900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/ab25b0f8-956e-4808-8ffe-a838b396cc4c_f1dafbe571.webp",
    category: "hamburguesas",
    tags: ["res"],
  },
  {
    id: "la-bandida",
    name: "La Bandida",
    description:
      "Pan brioche, carne de res 150 g, queso Philadelphia, queso cheddar, tocineta caramelizada en BBQ maple, lechuga, tomate, BBQ maple y mayonesa de pimentón.",
    price: 30510,
    originalPrice: 33900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/6cb67047-0caf-4ca4-b090-db8eca8739bb_d23a61b444.webp",
    category: "hamburguesas",
    tags: ["res"],
  },
  {
    id: "la-bomba",
    name: "La Bomba",
    description:
      "Pan brioche, carne de res 150 g, doble queso cheddar, costilla de cerdo en miel de naranja, tocineta, cebolla crujiente, lechuga, tomate, salsa BBQ maple, mayonesa de pimentón y garlic.",
    price: 33210,
    originalPrice: 36900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/9a8c18d2-a458-477d-adab-a5f00495d7e2_eea23bb78e.webp",
    category: "hamburguesas",
    tags: ["res", "cerdo"],
  },
  {
    id: "la-pampara",
    name: "La Pámpara",
    description:
      "Pan brioche, filete de pechuga apanado en panko 150 g, queso mozzarella, sour cream de ajo, tocineta caramelizada en BBQ maple, lechuga, tomate, BBQ maple y mayonesa de pimentón.",
    price: 28710,
    originalPrice: 31900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/4ad6f65d-c4b7-42fc-b776-cec81a533628_c41942a9b0.webp",
    category: "hamburguesas",
    tags: ["pollo"],
  },
  {
    id: "la-estrellita",
    name: "La Estrellita",
    description:
      "Pan brioche, carne de res 150 g, queso Philadelphia, tocineta, reducción de frutos rojos, lechuga, tomate, mayonesa de pimentón y BBQ maple.",
    price: 33210,
    originalPrice: 36900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/012fe0cf-c121-4626-9762-847cd36d765e_0129183832.webp",
    category: "hamburguesas",
    tags: ["res"],
  },
  {
    id: "smash-plena",
    name: "Smash La Plena",
    description:
      "Pan brioche, doble carne smash de 60 g cada una, queso cheddar entre las carnes, cebolla grillé (60 g) y salsa de la casa.",
    price: 25110,
    originalPrice: 27900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/4b485f63-c049-4315-9615-71e02c22c594_bc9b65de96.webp",
    category: "hamburguesas",
    tags: ["res", "smash"],
  },
  {
    id: "smash-cheddar",
    name: "Smash La Cheddar",
    description:
      "Pan brioche, doble carne smash de 60 g, queso cheddar entre las carnes, cebolla grillé (60 g), salsa de la casa y bloque de queso apanado con mezcla de cheddar, parmesano y mozzarella.",
    price: 29610,
    originalPrice: 32900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/d914effe-715f-4e76-8792-798233fb206b_55c189027f.webp",
    category: "hamburguesas",
    tags: ["res", "smash"],
  },
  {
    id: "smash-costenita",
    name: "Smash La Costeñita",
    description:
      "Pan brioche, carne smash de chorizo ahumado (60 g) con cheddar derretido, 80 g de carne desmechada, BBQ maple, mayonesa de pimentón y 50 g de chips de plátano crujientes.",
    price: 26910,
    originalPrice: 29900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/38648cb8-e62d-485b-9e9e-5c457097b633_f08c64373c.webp",
    category: "hamburguesas",
    tags: ["res", "smash"],
  },
  {
    id: "smash-maravilla",
    name: "Smash La Maravilla",
    description:
      "Carne smash 50 g, pollo 70 g en BBQ, queso cheddar y salsa especial.",
    price: 26910,
    originalPrice: 29900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/242e16a8-7033-419a-a8fe-3af120a361f2_e2ea2777a9.webp",
    category: "hamburguesas",
    tags: ["res", "pollo", "smash"],
  },
  {
    id: "la-red-flag",
    name: "La Red Flag",
    description:
      "Pan brioche, triple carne de res 80 g, queso cheddar, cebolla caramelizada, lechuga fresca, tomate, salsa BBQ maple y mayonesa de pimentón.",
    price: 30510,
    originalPrice: 33900,
    discount: 10,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/c53d806a-1f12-4231-9ff4-b2befbb3896b_f3ad3c57a7.webp",
    category: "hamburguesas",
    tags: ["res"],
  },

  // ACOMPAÑANTES
  {
    id: "papas-francesa",
    name: "Papas a la Francesa",
    description: "Papas fritas crujientes, porción individual.",
    price: 5000,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/2a06702f-238f-446d-acad-a8e3331a0d14_396955c018.webp",
    category: "acompanantes",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola 400 ml",
    description: "Bebida gaseosa Coca-Cola, lata 400 ml bien fría.",
    price: 6000,
    image:
      "https://s3yuumiproduction.s3.us-east-2.amazonaws.com/2b346a63-18af-440c-84d9-1f52c6085fca_50bcd95665.webp",
    category: "acompanantes",
  },
];

export const categories = [
  { id: "combos", label: "Combos" },
  { id: "hamburguesas", label: "Hamburguesas" },
  { id: "acompanantes", label: "Acompañantes" },
] as const;

export const sedes = [
  {
    name: "Fuego Burger — Barrios Unidos",
    address: "Cra. 24 #57-09, Barrios Unidos, Bogotá",
    phone: "+57 300 000 0000",
  },
  {
    name: "Fuego Burger — Modelia",
    address: "Cl. 22B #68B-27, Modelia, Bogotá",
    phone: "+57 300 000 0001",
  },
  {
    name: "Fuego Burger — Manila, Medellín",
    address: "Cl. 10 #43E-24, El Poblado, Medellín",
    phone: "+57 300 000 0002",
  },
];

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
