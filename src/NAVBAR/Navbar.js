import "./navbarStyles.css";
export function Navbar({
  children,
  colorPallete,
  colorHover,
  gridTemplate = "3fr 1fr 1fr 1fr ",
  showFirst = true,
}) {
  return (
    <nav
      style={{ gridTemplateColumns: gridTemplate }}
      className={`navbarDiv ${colorPallete} ${colorHover} ${
        showFirst === true ? "showFirst" : ""
      } `}
    >
      {children}
    </nav>
  );
}
