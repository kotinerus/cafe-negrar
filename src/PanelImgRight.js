export function PanelImgRight({ panelPallete = "panel-primary", children }) {
  return <div className={`panel ${panelPallete} imgRight`}>{children}</div>;
}
