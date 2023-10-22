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
