import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bath, Scissors, Heart, ShoppingBag, Calendar, Star, Sparkles, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/hero-pawspa.jpg";
import bathImg from "@/assets/service-bath.jpg";
import groomImg from "@/assets/service-grooming.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import shopImg from "@/assets/shop-products.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PawSpa — Spa & Tienda de mascotas felices" },
      { name: "description", content: "Reserva baño, corte y grooming para tu mascota en La Paz. Productos premium y atención con cariño." },
      { property: "og:title", content: "PawSpa — Spa & Tienda de mascotas" },
      { property: "og:description", content: "Cuidamos cada patita como si fuera de la familia." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 size-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 right-20 size-80 rounded-full bg-mint/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur text-sm font-semibold text-primary shadow-card">
              <Sparkles className="size-4" /> Spa boutique para mascotas
            </span>
            <h1 className="mt-5 font-display font-black text-5xl lg:text-7xl leading-[1.05] text-foreground">
              Patitas felices,<br />
              <span className="text-primary">colas que mueven</span> de alegría.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-lg leading-relaxed">
              Baño, corte, uñas y mimos a domicilio del corazón. Más una tienda con todo lo
              necesario para consentir a tu mejor amigo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full shadow-warm h-14 px-8 text-base">
                <Link to="/reservar">
                  <Calendar className="size-5" /> Reservar cita
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base bg-background/60 backdrop-blur">
                <Link to="/tienda">
                  <ShoppingBag className="size-5" /> Ver tienda
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Stat number="2,400+" label="Mascotas atendidas" />
              <Stat number="4.9★" label="Reseñas felices" />
              <Stat number="6" label="Groomers expertos" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-coral opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Cachorro y gatito en el spa de PawSpa"
              className="relative w-full rounded-[2.5rem] shadow-warm object-cover aspect-[4/3]"
              width={1600}
              height={1024}
            />
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-warm flex items-center gap-3 animate-float">
              <div className="size-12 rounded-full bg-mint grid place-items-center text-2xl">🐶</div>
              <div>
                <p className="font-bold text-sm">+150 citas</p>
                <p className="text-xs text-muted-foreground">esta semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Lo que hacemos</span>
          <h2 className="mt-2 font-display font-black text-4xl lg:text-5xl">
            Servicios pensados con cariño
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada servicio sigue un checklist completo: baño, corte, uñas, oídos, glándulas y
            perfume. Nada se nos escapa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            img={bathImg}
            icon={<Bath className="size-5" />}
            title="Baño aromático"
            price="Bs 80"
            duration="45 min"
            desc="Shampoo hipoalergénico, secado profesional y un toque de perfume."
          />
          <ServiceCard
            img={groomImg}
            icon={<Scissors className="size-5" />}
            title="Corte & estilo"
            price="Bs 150"
            duration="90 min"
            desc="Corte personalizado según raza y temperamento por groomers certificados."
          />
          <ServiceCard
            img={nailsImg}
            icon={<Heart className="size-5" />}
            title="Spa completo"
            price="Bs 220"
            duration="2 h"
            desc="Baño, corte, uñas, limpieza de oídos, glándulas y mimos extra."
          />
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-wider text-xs">Por qué PawSpa</span>
            <h2 className="mt-2 font-display font-black text-4xl lg:text-5xl">
              Tu mascota merece lo mejor
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ShieldCheck className="size-7" />}
              title="Groomers certificados"
              desc="Cada miembro de nuestro equipo está formado en seguridad animal y técnicas de manejo."
              color="primary"
            />
            <FeatureCard
              icon={<Clock className="size-7" />}
              title="Reserva en línea 24/7"
              desc="Agenda tu cita cuando quieras y recibe recordatorios por WhatsApp."
              color="mint"
            />
            <FeatureCard
              icon={<Heart className="size-7" />}
              title="Trato con cariño"
              desc="Sin jaulas. Mascotas relajadas y felices durante todo el servicio."
              color="sunshine"
            />
          </div>
        </div>
      </section>

      {/* TIENDA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-mint/40 blur-2xl" />
            <img
              src={shopImg}
              alt="Productos premium para mascotas en PawSpa"
              loading="lazy"
              className="relative w-full rounded-3xl shadow-warm object-cover aspect-[3/2]"
              width={1200}
              height={800}
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold uppercase tracking-wider text-xs">Tienda PawSpa</span>
            <h2 className="mt-2 font-display font-black text-4xl lg:text-5xl">
              Todo lo que tu peludo necesita
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Shampoos premium, snacks saludables, juguetes resistentes, accesorios y comida de
              marcas que confiamos. Acumula puntos en cada compra.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Programa de fidelización con puntos",
                "Variantes de talla y color disponibles",
                "Stock siempre actualizado",
                "Retiro en tienda o entrega a domicilio",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 size-5 rounded-full bg-mint grid place-items-center">
                    <Star className="size-3 text-mint-foreground fill-current" />
                  </span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 rounded-full shadow-soft h-14 px-8">
              <Link to="/tienda">Explorar tienda</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="rounded-[2.5rem] bg-gradient-coral p-10 lg:p-16 text-center text-primary-foreground shadow-warm relative overflow-hidden">
          <div className="absolute -top-10 -left-10 text-9xl opacity-15">🐾</div>
          <div className="absolute -bottom-12 -right-8 text-9xl opacity-15">🐾</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl relative">
            ¿Listo para consentir a tu mejor amigo?
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto relative">
            Reserva en menos de un minuto. Te confirmamos por WhatsApp.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full h-14 px-8 text-base relative">
            <Link to="/reservar">
              <Calendar className="size-5" /> Reservar ahora
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display font-black text-3xl text-primary">{number}</div>
      <div className="text-xs text-foreground/60 font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ServiceCard({
  img, icon, title, price, duration, desc,
}: { img: string; icon: React.ReactNode; title: string; price: string; duration: string; desc: string }) {
  return (
    <Card className="overflow-hidden p-0 border-0 shadow-card hover:shadow-warm transition-all hover:-translate-y-1 bg-card group">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={600} />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
            {icon} {duration}
          </span>
          <span className="font-display font-bold text-primary text-lg">{price}</span>
        </div>
        <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </Card>
  );
}

function FeatureCard({
  icon, title, desc, color,
}: { icon: React.ReactNode; title: string; desc: string; color: "primary" | "mint" | "sunshine" }) {
  const bgClass = color === "primary" ? "bg-primary text-primary-foreground" : color === "mint" ? "bg-mint text-mint-foreground" : "bg-sunshine text-foreground";
  return (
    <div className="p-8 rounded-3xl bg-background shadow-card hover:shadow-soft transition-shadow">
      <div className={`size-14 rounded-2xl grid place-items-center mb-5 ${bgClass}`}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
