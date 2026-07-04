function Button({
  children,
  variant = "primary",
  href,
  target = "_self",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-md",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noreferrer"
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;