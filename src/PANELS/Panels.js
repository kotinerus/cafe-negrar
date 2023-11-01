import "./panelsStyles.css";

export function PanelImgLeft({ panelPallete = "panel-primary", id, children }) {
  return (
    <div className={`panel ${panelPallete} imgLeft`} id={id}>
      {children}
    </div>
  );
}
export function PanelImgRight({
  panelPallete = "panel-primary",
  id,
  children,
}) {
  return (
    <div className={`panel ${panelPallete} imgRight`} id={id}>
      {children}
    </div>
  );
}
