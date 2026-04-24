import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] grid place-items-center px-4 py-20">
        <div className="max-w-md text-center">
          <div className="text-8xl mb-4">🐾</div>
          <h1 className="text-6xl font-display font-black text-foreground">404</h1>
          <h2 className="mt-3 text-xl font-semibold">Esta página se escapó</h2>
          <p className="mt-2 text-muted-foreground">
            Parece que un cachorro travieso se la llevó. Volvamos a casa.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 shadow-soft transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PawSpa — Spa & Tienda de mascotas en La Paz" },
      { name: "description", content: "Reserva grooming, baño y compra productos premium para tu mascota. PawSpa, donde tu peludo es feliz." },
      { name: "author", content: "PawSpa" },
      { property: "og:title", content: "PawSpa — Spa & Tienda de mascotas" },
      { property: "og:description", content: "Cuidamos cada patita como si fuera de la familia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster richColors position="top-center" />
    </>
  );
}
