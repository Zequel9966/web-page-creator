import { createFileRoute, Outlet, Link, Navigate, useRouterState } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar, ROLE_ALLOWED } from "@/components/app/AppSidebar";
import { useAuth, ROLE_LABEL, defaultHomeForRole } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/app")({
  component: AppShell,
});

function AppShell() {
  const { user, role, signOut } = useAuth();
  const path = useRouterState({ select: (r) => r.location.pathname });

  if (!role) {
    return (
      <div className="min-h-screen grid place-items-center text-muted-foreground">
        Cargando rol…
      </div>
    );
  }

  if (path === "/app" || path === "/app/") {
    return <Navigate to={defaultHomeForRole(role)} />;
  }

  const allowed = ROLE_ALLOWED[path];
  if (allowed && !allowed.includes(role)) {
    return <Navigate to={defaultHomeForRole(role)} />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary/30">
        <AppSidebar role={role} />
        <SidebarInset>
          <header className="h-14 flex items-center justify-between gap-3 border-b bg-background px-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Badge variant="secondary" className="rounded-full">{ROLE_LABEL[role]}</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="size-4" /> {user?.email}
              </span>
              <Button asChild variant="ghost" size="sm">
                <Link to="/">Ir al sitio</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={async () => { await signOut(); toast.success("Sesión cerrada"); }}>
                <LogOut className="size-4" /> Salir
              </Button>
            </div>
          </header>
          <main className="p-4 lg:p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}