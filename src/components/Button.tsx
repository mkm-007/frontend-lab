type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  label: string;
};

export function Button({ variant = "primary", label, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button-${variant} ${className ?? ""}`.trim()}
      aria-label={label}
      {...rest}
    >
      {label}
    </button>
  );
}
