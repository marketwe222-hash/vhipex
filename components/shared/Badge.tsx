type BadgeVariant = "blue" | "red" | "white" | "neutral";
export default function Badge({ label, variant = "blue" }: { label: string; variant?: BadgeVariant }) {
  return <span className={`badge-${variant}`}>{label}</span>;
}
