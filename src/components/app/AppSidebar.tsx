import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Calendar, Users, Dog, Scissors, Boxes, BarChart3,
  Shield, User, ShoppingBag, ClipboardList, History, PawPrint,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { AppRole } from "@/lib/auth-context";
import logo from "@/assets/pawspa-logo.png";

type Item = { to: string; label: string; icon: React.ComponentType<{ className?: string }> };

const NAV: Record<AppRole, Item[]> = {
  admin: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/citas", label: "Citas", icon: Calendar },
    { to: "/app/clientes", label: "Clientes", icon: Users },
    { to: "/app/mascotas", label: "Mascotas", icon: Dog },
    { to: "/app/servicios", label: "Servicios", icon: Scissors },
    { to: "/app/inventario", label: "Inventario", icon: Boxes },
    { to: "/app/reportes", label: "Reportes", icon: BarChart3 },
    { to: "/app/usuarios", label: "Usuarios", icon: Shield },
  ],
  recepcionista: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/citas", label: "Citas", icon: Calendar },
    { to: "/app/clientes", label: "Clientes", icon: Users },
    { to: "/app/mascotas", label: "Mascotas", icon: Dog },
    { to: "/app/servicios", label: "Servicios", icon: Scissors },
  ],
  groomer: [
    { to: "/app/mi-agenda", label: "Mi agenda", icon: Calendar },
    { to: "/app/citas", label: "Mis citas", icon: ClipboardList },
    { to: "/app/mascotas", label: "Mascotas", icon: Dog },
  ],
  cliente: [
    { to: "/app/mi-cuenta", label: "Mi cuenta", icon: User },
    { to: "/app/mis-mascotas", label: "Mis mascotas", icon: PawPrint },
    { to: "/app/mis-citas", label: "Mis citas", icon: History },
    { to: "/reservar", label: "Reservar cita", icon: Calendar },
    { to: "/tienda", label: "Tienda", icon: ShoppingBag },
  ],
};

export function AppSidebar({ role }: { role: AppRole }) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const items = NAV[role];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="font-display font-black text-lg">
            Paw<span className="text-primary">Spa</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((it) => (
                <SidebarMenuItem key={it.to}>
                  <SidebarMenuButton asChild isActive={path === it.to}>
                    <Link to={it.to} className="flex items-center gap-2">
                      <it.icon className="h-4 w-4" />
                      <span>{it.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export const ROLE_ALLOWED: Record<string, AppRole[]> = {
  "/app/dashboard": ["admin", "recepcionista"],
  "/app/citas": ["admin", "recepcionista", "groomer"],
  "/app/clientes": ["admin", "recepcionista"],
  "/app/mascotas": ["admin", "recepcionista", "groomer"],
  "/app/servicios": ["admin", "recepcionista"],
  "/app/inventario": ["admin"],
  "/app/reportes": ["admin"],
  "/app/usuarios": ["admin"],
  "/app/mi-agenda": ["groomer"],
  "/app/mi-cuenta": ["cliente"],
  "/app/mis-mascotas": ["cliente"],
  "/app/mis-citas": ["cliente"],
};