import "./ButtonStyles.css";

export function Button({
  children,
  classPar,
  height = "3rem",
  width = "40%",
  backgroundColor = "#e67e22",
  cursor = "pointer",
  color = "#2b2828",
  fontWeight = 600,
  fontFamily = "Lato",
  borderRadius = "45px",
  border = "none",
  textTransform = "uppercase",
}) {
  return (
    <button
      className={`btn-info ${classPar} `}
      style={{
        height,
        width,
        backgroundColor,
        cursor,
        color,
        fontWeight,
        fontFamily,
        borderRadius,
        border,
        textTransform,
      }}
    >
      {children}
    </button>
  );
}
