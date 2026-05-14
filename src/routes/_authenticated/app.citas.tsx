import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { citasDemo } from "@/data/demo";
import { useAuth } from "@/lib/auth-context";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/citas")({
  component: CitasPage,
});

const estadoVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Completada: "default", "En proceso": "secondary", Pendiente: "outline", Cancelada: "destructive",
};

function CitasPage() {
  const { role } = useAuth();
  const rows = role === "groomer" ? citasDemo.filter((c) => c.groomer === "María González") : citasDemo;
  return (
    <>
      <PageHeader
        title={role === "groomer" ? "Mis citas" : "Citas"}
        subtitle="Gestión de reservas y asignaciones"
        action={role !== "groomer" && (
          <Button className="rounded-full"><Plus className="size-4" /> Nueva cita</Button>
        )}
      />
      <Card className="p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead><TableHead>Fecha/Hora</TableHead><TableHead>Cliente</TableHead>
              <TableHead>Mascota</TableHead><TableHead>Servicio</TableHead><TableHead>Groomer</TableHead>
              <TableHead>Estado</TableHead><TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-mono text-xs">{c.id}</TableCell>
                <TableCell>{c.fecha} · {c.hora}</TableCell>
                <TableCell>{c.cliente}</TableCell>
                <TableCell>{c.mascota}</TableCell>
                <TableCell>{c.servicio}</TableCell>
                <TableCell>{c.groomer}</TableCell>
                <TableCell><Badge variant={estadoVariant[c.estado]}>{c.estado}</Badge></TableCell>
                <TableCell><Button variant="ghost" size="sm">Ver</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}