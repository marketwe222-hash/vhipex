interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}
export default function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return <button className={`btn-${variant}`} {...props}>{children}</button>;
}
