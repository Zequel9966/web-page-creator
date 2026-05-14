import { createFileRoute, Outlet, Navigate } from "@tanstack/react-router";
import { AuthProvider, useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/_authenticated")({
  component: () => (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  ),
});

function Gate() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-muted-foreground">
        Cargando…
      </div>
    );
  }
  if (!user) return <Navigate to="/iniciar-sesion" />;
  return <Outlet />;
}