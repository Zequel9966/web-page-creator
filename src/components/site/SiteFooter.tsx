import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin, PawPrint } from "lucide-react";
import logo from "@/assets/pawspa-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" className="h-10 w-10" width={40} height={40} />
              <span className="font-display font-black text-2xl">
                Paw<span className="text-primary">Spa</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Donde tu mascota recibe el cariño, el spa y los productos que se merece. Cuidamos cada
              patita como si fuera de la familia.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="size-10 grid place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-card">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="size-10 grid place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-card">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Explora</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
              <li><Link to="/tienda" className="hover:text-primary">Tienda</Link></li>
              <li><Link to="/reservar" className="hover:text-primary">Reservar cita</Link></li>
              <li><Link to="/sobre-nosotros" className="hover:text-primary">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="size-4 text-primary mt-0.5" /> Av. Arce 2345, La Paz</li>
              <li className="flex items-start gap-2"><Phone className="size-4 text-primary mt-0.5" /> +591 700 12345</li>
              <li className="flex items-start gap-2"><Mail className="size-4 text-primary mt-0.5" /> hola@pawspa.bo</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <PawPrint className="size-3.5 text-primary" /> © {new Date().getFullYear()} PawSpa. Hecho con cariño en Bolivia.
          </p>
          <p>Lun a Sáb · 9:00 — 19:00</p>
        </div>
      </div>
    </footer>
  );
}
