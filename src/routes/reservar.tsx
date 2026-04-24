import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/reservar")({
  head: () => ({
    meta: [
      { title: "Reservar cita — PawSpa" },
      { name: "description", content: "Reserva tu cita de grooming en PawSpa. Próximamente disponible online." },
    ],
  }),
  component: ReservarPage,
});

function ReservarPage() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-20">
      <Card className="max-w-2xl mx-auto p-10 lg:p-14 text-center border-0 shadow-warm bg-gradient-warm">
        <div className="size-20 mx-auto rounded-full bg-background grid place-items-center shadow-soft mb-6">
          <Calendar className="size-10 text-primary" />
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 text-sm font-semibold text-primary mb-4 shadow-card">
          <Sparkles className="size-4" /> Próximamente
        </span>
        <h1 className="font-display font-black text-4xl lg:text-5xl">
          Reserva en línea, muy pronto 🐾
        </h1>
        <p className="mt-5 text-foreground/75 leading-relaxed">
          Estamos preparando el sistema de reservas online con calendario en tiempo real,
          recordatorios por WhatsApp y selección de tu groomer favorito. Mientras tanto, escríbenos
          y te ayudamos a agendar.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <a href="https://wa.me/59170012345" target="_blank" rel="noopener noreferrer">Agendar por WhatsApp</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full bg-background/60">
            <Link to="/iniciar-sesion"><Lock className="size-4" /> Acceso clientes</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}
