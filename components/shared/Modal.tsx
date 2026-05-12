export default function Modal({ children, open }: { children: React.ReactNode; open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: "var(--modal-backdrop)" }}>
      <div className="glass-modal p-6">{children}</div>
    </div>
  );
}
