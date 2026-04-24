import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Award, Users, PawPrint } from "lucide-react";
import heroImg from "@/assets/hero-pawspa.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros — PawSpa" },
      { name: "description", content: "Conoce al equipo detrás de PawSpa: groomers expertos apasionados por las mascotas." },
      { property: "og:title", content: "Sobre nosotros — PawSpa" },
      { property: "og:description", content: "Una historia de cariño por las mascotas." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-warm py-16 lg:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 text-sm font-semibold text-primary shadow-card">
              <PawPrint className="size-4" /> Nuestra historia
            </span>
            <h1 className="mt-5 font-display font-black text-5xl lg:text-6xl leading-[1.05]">
              Empezamos con una idea: <span className="text-primary">spa sin estrés</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
              PawSpa nació en 2022 cuando Camila rescató a Pelusa, una perrita asustadiza que odiaba
              los baños. Buscando un lugar donde la trataran con paciencia, descubrió que faltaba un
              spa de verdad. Hoy somos el lugar favorito de cientos de mascotas en La Paz.
            </p>
          </div>
          <img src={heroImg} alt="Equipo PawSpa" loading="lazy" className="rounded-3xl shadow-warm w-full aspect-[4/3] object-cover" width={1600} height={1024} />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Value icon={<Heart className="size-7" />} title="Sin jaulas" desc="Todas las mascotas esperan en espacios abiertos y supervisados. Cero estrés." color="primary" />
          <Value icon={<Award className="size-7" />} title="Equipo certificado" desc="Capacitación continua en grooming y bienestar animal." color="mint" />
          <Value icon={<Users className="size-7" />} title="Familia primero" desc="Tratamos a tu mascota como si fuera nuestra. Te enviamos fotos del proceso." color="sunshine" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-wider text-xs">El equipo</span>
            <h2 className="mt-2 font-display font-black text-4xl lg:text-5xl">Conoce a los groomers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Camila V.", role: "Fundadora & Groomer Senior", emoji: "👩‍🦱" },
              { name: "Diego M.", role: "Groomer especialista en razas grandes", emoji: "👨" },
              { name: "Lucía R.", role: "Especialista en cachorros", emoji: "👩" },
              { name: "Tomás S.", role: "Groomer & estilista", emoji: "👨‍🦰" },
            ].map((m) => (
              <Card key={m.name} className="p-6 text-center border-0 shadow-card bg-card">
                <div className="size-24 mx-auto rounded-full bg-gradient-coral grid place-items-center text-5xl mb-4">{m.emoji}</div>
                <h3 className="font-display font-bold text-lg">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <h2 className="font-display font-black text-4xl lg:text-5xl">¿Quieres conocernos?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Pasa por nuestro local en Av. Arce o agenda tu primera cita. Te esperamos con cariño.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full"><Link to="/reservar">Reservar cita</Link></Button>
          <Button asChild variant="outline" size="lg" className="rounded-full"><Link to="/contacto">Escríbenos</Link></Button>
        </div>
      </section>
    </>
  );
}

function Value({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: "primary" | "mint" | "sunshine" }) {
  const cls = color === "primary" ? "bg-primary text-primary-foreground" : color === "mint" ? "bg-mint text-mint-foreground" : "bg-sunshine text-foreground";
  return (
    <div className="p-8 rounded-3xl bg-background shadow-card">
      <div className={`size-14 rounded-2xl grid place-items-center mb-5 ${cls}`}>{icon}</div>
      <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
