import "./landingPageStyles.css";

import waiter from "../imgs/waiterJPG.jpeg";

import { Panel } from "../PANELS/Panels";
import { listOfPanels } from "./listOfPanels/listOfPanels.js";

export function LandingPage({ onChangePage }) {
  return (
    <>
      <div className="welcomeDiv">
        <img src={waiter} loading="lazy" />
        <article id="zapis">
          <h1>NEGRAR</h1>
          <h2>Zapisz się do newslettera</h2>
          <form>
            <input placeholder="Wpisz swojego maila" />
            <button>WYŚLIJ</button>
          </form>
        </article>
      </div>
      {listOfPanels.map((i) => (
        <Panel object={i} key={i.id}>
          {i.text}
          {i.img}
        </Panel>
      ))}
      <footer>Wszelkie prawa zastrzeżone © 2023 przez Negrar Cafe</footer>
    </>
  );
}
