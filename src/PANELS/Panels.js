import "./panelsStyles.css";

export function Panel({ children, object }) {
  const { id, imgPosition, backgroundColor, color } = object;
  return (
    <div
      loading="lazy"
      className={"panel"}
      id={id}
      style={
        imgPosition === "left"
          ? { gridTemplateAreas: `"img text"`, backgroundColor, color }
          : { gridTemplateAreas: `"text img"`, backgroundColor, color }
      }
    >
      {children}
    </div>
  );
}
