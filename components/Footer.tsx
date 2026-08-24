import Image from "next/image";
import { LOGO_URL, sedes } from "../lib/menu-data";

export default function Footer() {
  return (
    <footer className="bg-fuego-gray-dark border-t border-fuego-gray-mid mt-12">
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marca */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src={LOGO_URL}
                alt="Fuego Burger logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-black text-white text-lg">
              FUEGO <span className="text-fuego-red">BURGER</span>
            </span>
          </div>
          <p className="text-fuego-text-muted text-sm leading-relaxed">
            Hamburguesas artesanales hechas con fuego real. Colombia.
          </p>
        </div>

        {/* Sedes */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
            Nuestras sedes
          </h3>
          <ul className="flex flex-col gap-4">
            {sedes.map((sede) => (
              <li key={sede.name} className="text-sm">
                <p className="text-fuego-text-light font-semibold">
                  {sede.name}
                </p>
                <p className="text-fuego-text-muted">{sede.address}</p>
                <a
                  href={`tel:${sede.phone}`}
                  className="text-fuego-red hover:text-fuego-red-light transition-colors"
                >
                  {sede.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://api.yuumi.co/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuego-text-muted hover:text-white text-sm transition-colors"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                href="https://api.yuumi.co/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuego-text-muted hover:text-white text-sm transition-colors"
              >
                Política de privacidad
              </a>
            </li>
          </ul>

          <div className="mt-6 p-3 bg-fuego-gray-mid rounded-xl">
            <p className="text-xs text-fuego-text-muted">
              Todos los precios en{" "}
              <strong className="text-white">pesos colombianos (COP)</strong>
              . IVA incluido.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-fuego-gray-mid py-4 text-center">
        <p className="text-fuego-text-muted text-xs">
          © {new Date().getFullYear()} Fuego Burger. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
