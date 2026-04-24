import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, PawPrint } from "lucide-react";

export const Route = createFileRoute("/iniciar-sesion")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión — PawSpa" },
      { name: "description", content: "Accede a tu cuenta PawSpa para gestionar mascotas, reservas y compras." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-20">
      <Card className="max-w-md mx-auto p-10 text-center border-0 shadow-warm bg-card">
        <div className="size-16 mx-auto rounded-2xl bg-primary/10 grid place-items-center mb-5">
          <PawPrint className="size-8 text-primary" />
        </div>
        <h1 className="font-display font-black text-3xl">Bienvenido de vuelta</h1>
        <p className="mt-3 text-muted-foreground">
          El portal de clientes y administración estará disponible muy pronto. Activaremos cuentas,
          historial de mascotas y reservas.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="size-4" /> Próximamente
        </div>
        <Button asChild variant="ghost" className="mt-6 w-full rounded-full">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </Card>
    </section>
  );
}
