import { Link } from "@tanstack/react-router";
import { Menu, X, PawPrint } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pawspa-logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/tienda", label: "Tienda" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="" className="h-10 w-10 group-hover:animate-wiggle" width={40} height={40} />
          <span className="font-display font-black text-2xl text-foreground">
            Paw<span className="text-primary">Spa</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full shadow-soft">
            <Link to="/reservar">
              <PawPrint className="size-4" /> Reservar cita
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-foreground/80 hover:bg-muted"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
              <Button asChild variant="outline" className="w-full">
                <Link to="/iniciar-sesion" onClick={() => setOpen(false)}>Iniciar sesión</Link>
              </Button>
              <Button asChild className="w-full rounded-full">
                <Link to="/reservar" onClick={() => setOpen(false)}>Reservar cita</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
