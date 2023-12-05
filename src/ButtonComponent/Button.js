import "./ButtonStyles.css";

export function Button({
  children,
  classPar,
  height = "3rem",
  width = "40%",
  backgroundColor = "#F15946",
  cursor = "pointer",
  color = "#f4eded",
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
