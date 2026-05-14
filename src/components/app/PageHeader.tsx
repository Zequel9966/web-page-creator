export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-6 flex-wrap">
      <div>
        <h1 className="font-display font-black text-3xl text-foreground">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, hint, accent = "primary" }: { label: string; value: string; hint?: string; accent?: "primary" | "mint" | "sunshine" | "muted" }) {
  const bg =
    accent === "mint" ? "bg-mint/30 text-mint-foreground"
    : accent === "sunshine" ? "bg-sunshine/30 text-foreground"
    : accent === "muted" ? "bg-muted text-foreground"
    : "bg-primary/10 text-primary";
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-display font-black">{value}</span>
        {hint && <span className={`text-xs font-semibold rounded-full px-2 py-0.5 ${bg}`}>{hint}</span>}
      </div>
    </div>
  );
}