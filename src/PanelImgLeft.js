export function PanelImgLeft({
  panelPallete = "panel-primary",
  id = "",
  children,
}) {
  return (
    <div className={`panel ${panelPallete} imgLeft`} id={id}>
      {children}
    </div>
  );
}
