import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Recaptcha } from "@/components/site/Recaptcha";
import { verifyRecaptcha } from "@/server/recaptcha.functions";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { title: "Crear cuenta — PawSpa" },
      { name: "description", content: "Regístrate en PawSpa para reservar citas y comprar productos para tu mascota." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (!captcha) {
      toast.error("Completa el captcha");
      return;
    }
    setLoading(true);
    try {
      const v = await verifyRecaptcha({ data: { token: captcha } });
      if (!v.ok) throw new Error("Captcha inválido");
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: { full_name: fullName, phone },
        },
      });
      if (error) throw error;
      toast.success("¡Cuenta creada! Revisa tu correo para confirmar.");
      navigate({ to: "/iniciar-sesion" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <Card className="max-w-md mx-auto p-8 border-0 shadow-warm bg-card">
        <div className="text-center mb-6">
          <div className="size-14 mx-auto rounded-2xl bg-primary/10 grid place-items-center mb-3">
            <PawPrint className="size-7 text-primary" />
          </div>
          <h1 className="font-display font-black text-3xl">Crear cuenta</h1>
          <p className="text-muted-foreground text-sm mt-1">Únete a la familia PawSpa</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nombre completo</Label>
            <Input id="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña (mín. 8 caracteres)</Label>
            <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} />
          </div>
          <Recaptcha onChange={setCaptcha} />
          <Button type="submit" className="w-full rounded-full" disabled={loading}>
            {loading ? "Creando..." : "Crear cuenta"}
          </Button>
        </form>
        <p className="text-sm text-center mt-6 text-muted-foreground">
          ¿Ya tienes cuenta?{" "}
          <Link to="/iniciar-sesion" className="text-primary font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </Card>
    </section>
  );
}