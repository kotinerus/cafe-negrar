export function PanelImgLeft({ panelPallete = "panel-primary", children }) {
  return <div className={`panel ${panelPallete} imgLeft`}>{children}</div>;
}
