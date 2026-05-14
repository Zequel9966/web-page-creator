import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StatCard } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { citasDemo, ocupacionGroomers } from "@/data/demo";

export const Route = createFileRoute("/_authenticated/app/dashboard")({
  component: DashboardPage,
});

const estadoVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Completada: "default",
  "En proceso": "secondary",
  Pendiente: "outline",
  Cancelada: "destructive",
};

function DashboardPage() {
  return (
    <>
      <PageHeader title="Panel de control" subtitle="Resumen del día en PawSpa" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Citas hoy" value="6" hint="+2 vs ayer" accent="primary" />
        <StatCard label="Ingresos del día" value="Bs 1,240" hint="+12%" accent="mint" />
        <StatCard label="Ocupación groomers" value="58%" hint="3 activos" accent="sunshine" />
        <StatCard label="Stock crítico" value="2" hint="revisar" accent="muted" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 p-5">
          <h3 className="font-display font-bold text-lg mb-3">Agenda del día</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hora</TableHead>
                <TableHead>Mascota</TableHead>
                <TableHead>Servicio</TableHead>
                <TableHead>Groomer</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {citasDemo.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-mono">{c.hora}</TableCell>
                  <TableCell>{c.mascota}</TableCell>
                  <TableCell>{c.servicio}</TableCell>
                  <TableCell>{c.groomer}</TableCell>
                  <TableCell><Badge variant={estadoVariant[c.estado]}>{c.estado}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-5">
          <h3 className="font-display font-bold text-lg mb-1">Ocupación por groomer</h3>
          <p className="text-sm text-muted-foreground mb-4">% del día laboral</p>
          <div className="space-y-4">
            {ocupacionGroomers.map((g) => (
              <div key={g.groomer}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold">{g.groomer}</span>
                  <span className="text-muted-foreground">{g.citas} citas · {g.ocupacion}%</span>
                </div>
                <Progress value={g.ocupacion} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}