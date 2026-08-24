import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuego Burger — Domicilios",
  description:
    "Las mejores hamburguesas artesanales de Colombia. Pide tu Fuego Burger a domicilio.",
  openGraph: {
    title: "Fuego Burger",
    description: "Hamburguesas artesanales a tu puerta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
