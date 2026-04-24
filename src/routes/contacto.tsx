import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Tu nombre es muy corto").max(80),
  email: z.string().trim().email("Correo inválido").max(160),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(800),
});

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — PawSpa" },
      { name: "description", content: "Escríbenos por WhatsApp, correo o visítanos en nuestro local en La Paz." },
      { property: "og:title", content: "Contacto — PawSpa" },
      { property: "og:description", content: "Estamos aquí para responder tus dudas." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("¡Gracias! Te respondemos en menos de 24 h.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <section className="bg-gradient-warm py-16 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display font-black text-5xl lg:text-6xl">Hablemos 🐾</h1>
          <p className="mt-4 text-lg text-foreground/70">
            ¿Tienes preguntas o quieres una recomendación? Estamos a un mensaje de distancia.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-4">
          <ContactItem icon={<MapPin className="size-5" />} title="Visítanos" lines={["Av. Arce 2345", "La Paz, Bolivia"]} />
          <ContactItem icon={<Phone className="size-5" />} title="Llámanos" lines={["+591 700 12345"]} />
          <ContactItem icon={<MessageCircle className="size-5" />} title="WhatsApp" lines={["+591 700 12345", "Respondemos en minutos"]} />
          <ContactItem icon={<Mail className="size-5" />} title="Correo" lines={["hola@pawspa.bo"]} />
          <ContactItem icon={<Clock className="size-5" />} title="Horario" lines={["Lun a Vie: 9:00 — 19:00", "Sáb: 9:00 — 17:00"]} />
        </div>

        <Card className="p-8 lg:p-10 border-0 shadow-card bg-card">
          <h2 className="font-display font-bold text-2xl mb-6">Envíanos un mensaje</h2>
          <form onSubmit={submit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="mb-1.5 block">Tu nombre</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Camila Vega" maxLength={80} />
            </div>
            <div>
              <Label htmlFor="email" className="mb-1.5 block">Correo</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@correo.com" maxLength={160} />
            </div>
            <div>
              <Label htmlFor="message" className="mb-1.5 block">Mensaje</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Cuéntanos sobre tu mascota..." maxLength={800} />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full h-12">
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </Card>
      </section>
    </>
  );
}

function ContactItem({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card shadow-card">
      <div className="size-11 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold mb-0.5">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
}
