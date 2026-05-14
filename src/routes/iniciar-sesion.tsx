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

export const Route = createFileRoute("/iniciar-sesion")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión — PawSpa" },
      { name: "description", content: "Accede a tu cuenta PawSpa." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      toast.error("Completa el captcha");
      return;
    }
    setLoading(true);
    try {
      const v = await verifyRecaptcha({ data: { token: captcha } });
      if (!v.ok) throw new Error("Captcha inválido");
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success("¡Bienvenido de vuelta!");
      let dest = "/app/mi-cuenta";
      if (data.user) {
        const { data: r } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).limit(1).maybeSingle();
        const role = r?.role as string | undefined;
        if (role && role !== "cliente") dest = "/app/dashboard";
      }
      navigate({ to: dest });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error al iniciar sesión");
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
          <h1 className="font-display font-black text-3xl">Iniciar sesión</h1>
          <p className="text-muted-foreground text-sm mt-1">Accede a tu cuenta PawSpa</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Recaptcha onChange={setCaptcha} />
          <Button type="submit" className="w-full rounded-full" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        <p className="text-sm text-center mt-6 text-muted-foreground">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="text-primary font-semibold hover:underline">
            Regístrate
          </Link>
        </p>
      </Card>
    </section>
  );
}