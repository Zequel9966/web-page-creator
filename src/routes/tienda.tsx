import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import shopImg from "@/assets/shop-products.jpg";
import { useState } from "react";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda — PawSpa" },
      { name: "description", content: "Productos premium para mascotas: shampoos, snacks, juguetes, accesorios y comida." },
      { property: "og:title", content: "Tienda PawSpa — Productos premium para mascotas" },
      { property: "og:description", content: "Compra todo lo que tu peludo necesita y acumula puntos." },
    ],
  }),
  component: TiendaPage,
});

const categorias = ["Todos", "Higiene", "Alimentación", "Juguetes", "Accesorios", "Snacks"] as const;

const productos = [
  { id: 1, nombre: "Shampoo hipoalergénico 500ml", precio: 65, cat: "Higiene", emoji: "🧴", rating: 4.9, stock: 24 },
  { id: 2, nombre: "Croquetas premium 3kg", precio: 180, cat: "Alimentación", emoji: "🥣", rating: 4.8, stock: 12 },
  { id: 3, nombre: "Pelota de juguete resistente", precio: 35, cat: "Juguetes", emoji: "🎾", rating: 4.7, stock: 50 },
  { id: 4, nombre: "Collar bordado con nombre", precio: 75, cat: "Accesorios", emoji: "🎀", rating: 5.0, stock: 8 },
  { id: 5, nombre: "Snacks naturales 200g", precio: 28, cat: "Snacks", emoji: "🍖", rating: 4.9, stock: 35 },
  { id: 6, nombre: "Cepillo desenredante", precio: 55, cat: "Higiene", emoji: "🪮", rating: 4.6, stock: 18 },
  { id: 7, nombre: "Cama acolchada talla M", precio: 220, cat: "Accesorios", emoji: "🛏️", rating: 4.8, stock: 6 },
  { id: 8, nombre: "Hueso de cuero natural", precio: 18, cat: "Snacks", emoji: "🦴", rating: 4.5, stock: 60 },
  { id: 9, nombre: "Juguete cuerda mordedor", precio: 25, cat: "Juguetes", emoji: "🪢", rating: 4.7, stock: 40 },
  { id: 10, nombre: "Comida húmeda lata 400g", precio: 22, cat: "Alimentación", emoji: "🥫", rating: 4.4, stock: 80 },
  { id: 11, nombre: "Correa retráctil 5m", precio: 95, cat: "Accesorios", emoji: "🐕‍🦺", rating: 4.6, stock: 14 },
  { id: 12, nombre: "Spray desodorante para pelaje", precio: 42, cat: "Higiene", emoji: "💨", rating: 4.8, stock: 22 },
];

function TiendaPage() {
  const [cat, setCat] = useState<typeof categorias[number]>("Todos");
  const [q, setQ] = useState("");

  const filtered = productos.filter(
    (p) => (cat === "Todos" || p.cat === cat) && p.nombre.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <section className="bg-gradient-warm py-16 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 text-sm font-semibold text-primary shadow-card">
              <ShoppingBag className="size-4" /> Tienda PawSpa
            </span>
            <h1 className="mt-4 font-display font-black text-5xl lg:text-6xl">
              Productos que <span className="text-primary">aman</span>
            </h1>
            <p className="mt-4 text-foreground/70 text-lg max-w-xl">
              Selección curada de marcas premium. Envío en 24 h en La Paz y El Alto.
            </p>
          </div>
          <img src={shopImg} alt="Productos PawSpa" loading="lazy" className="rounded-3xl shadow-warm w-full max-w-sm aspect-[3/2] object-cover" width={600} height={400} />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar productos..."
              className="pl-11 h-12 rounded-full bg-card border-border"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
                  cat === c ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <Card key={p.id} className="p-0 overflow-hidden border-0 shadow-card hover:shadow-warm transition-all hover:-translate-y-1 bg-card group">
              <div className="aspect-square bg-gradient-sunset grid place-items-center text-7xl group-hover:scale-110 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="mb-2 rounded-full text-xs">{p.cat}</Badge>
                <h3 className="font-bold text-base leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">{p.nombre}</h3>
                <div className="flex items-center gap-1 text-sm mb-3">
                  <Star className="size-3.5 fill-sunshine text-sunshine" />
                  <span className="font-semibold">{p.rating}</span>
                  <span className="text-muted-foreground text-xs ml-auto">{p.stock} en stock</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-black text-primary text-2xl">Bs {p.precio}</span>
                  <Button size="sm" className="rounded-full">Añadir</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-3">🔎</div>
            <p className="text-muted-foreground">No encontramos productos. Prueba con otra búsqueda.</p>
          </div>
        )}
      </section>
    </>
  );
}
