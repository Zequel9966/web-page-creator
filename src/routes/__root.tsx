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
      { property: "og:title", content: "PawSpa — Spa & Tienda de mascotas en La Paz" },
      { property: "og:description", content: "Reserva grooming, baño y compra productos premium para tu mascota. PawSpa, donde tu peludo es feliz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PawSpa — Spa & Tienda de mascotas en La Paz" },
      { name: "twitter:description", content: "Reserva grooming, baño y compra productos premium para tu mascota. PawSpa, donde tu peludo es feliz." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fbd9683d-af91-468a-978f-7b2b8432f333/id-preview-9c605bcd--58ad4abe-4dcd-4111-94d5-a35617119369.lovable.app-1778121469559.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fbd9683d-af91-468a-978f-7b2b8432f333/id-preview-9c605bcd--58ad4abe-4dcd-4111-94d5-a35617119369.lovable.app-1778121469559.png" },
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
