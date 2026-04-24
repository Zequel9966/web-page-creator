import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, Scissors, Heart, Sparkles, Clock, Check, Calendar } from "lucide-react";
import bathImg from "@/assets/service-bath.jpg";
import groomImg from "@/assets/service-grooming.jpg";
import nailsImg from "@/assets/service-nails.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — PawSpa" },
      { name: "description", content: "Baño, corte, grooming completo, cuidado de uñas y más. Conoce todos los servicios de PawSpa." },
      { property: "og:title", content: "Servicios — PawSpa" },
      { property: "og:description", content: "Servicios profesionales de spa y grooming para tu mascota." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    icon: <Bath className="size-6" />, img: bathImg,
    title: "Baño aromático", price: "Bs 80", duration: "45 min",
    desc: "Shampoo hipoalergénico según tipo de pelaje, secado profesional, perfume suave.",
    items: ["Shampoo premium", "Acondicionador", "Secado profesional", "Perfume hipoalergénico"],
  },
  {
    icon: <Scissors className="size-6" />, img: groomImg,
    title: "Corte & estilo", price: "Bs 150", duration: "90 min",
    desc: "Corte personalizado por raza y temperamento. Asesoría de estilo incluida.",
    items: ["Corte de tijera o máquina", "Diseño según raza", "Acabado profesional", "Foto antes/después"],
  },
  {
    icon: <Heart className="size-6" />, img: nailsImg,
    title: "Spa completo", price: "Bs 220", duration: "2 horas",
    desc: "El paquete estrella. Todo incluido para que tu mascota salga renovada.",
    items: ["Baño + corte", "Limpieza de oídos", "Corte de uñas", "Glándulas anales", "Perfume premium"],
  },
  {
    icon: <Sparkles className="size-6" />, img: bathImg,
    title: "Cachorro feliz", price: "Bs 100", duration: "60 min",
    desc: "Primera experiencia de spa para cachorros. Suave, paciente y muy cariñoso.",
    items: ["Adaptación gradual", "Productos suaves", "Sesión de socialización", "Diploma incluido"],
  },
  {
    icon: <Heart className="size-6" />, img: nailsImg,
    title: "Solo uñas", price: "Bs 30", duration: "15 min",
    desc: "Corte y limado de uñas rápido y seguro. Sin estrés.",
    items: ["Corte preciso", "Limado", "Revisión de almohadillas"],
  },
  {
    icon: <Bath className="size-6" />, img: groomImg,
    title: "Tratamiento de pelaje", price: "Bs 180", duration: "75 min",
    desc: "Para pelajes largos o problemáticos. Desenredado y nutrición profunda.",
    items: ["Desenredado", "Mascarilla nutritiva", "Cepillado profundo", "Brillo natural"],
  },
];

function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-warm py-16 lg:py-20 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 text-sm font-semibold text-primary shadow-card">
            <Sparkles className="size-4" /> Servicios
          </span>
          <h1 className="mt-5 font-display font-black text-5xl lg:text-6xl">
            Cada servicio, hecho con <span className="text-primary">cariño</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Desde un baño rapidito hasta el spa completo. Elige el que mejor se adapta a tu mascota.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="p-0 overflow-hidden border-0 shadow-card hover:shadow-warm transition-all bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" width={800} height={600} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-primary mb-2">
                  {s.icon}
                  <span className="text-sm font-semibold inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {s.duration}</span>
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display font-bold text-2xl">{s.title}</h3>
                  <span className="font-display font-black text-primary text-2xl">{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-primary shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link to="/reservar">Reservar</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-mint/30 p-10 text-center">
          <h2 className="font-display font-black text-3xl">¿No estás seguro qué elegir?</h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
            Cuéntanos sobre tu mascota y nuestro equipo te recomienda el mejor servicio.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full"><Link to="/contacto"><Calendar className="size-5" /> Hablar con un experto</Link></Button>
        </div>
      </section>
    </>
  );
}
