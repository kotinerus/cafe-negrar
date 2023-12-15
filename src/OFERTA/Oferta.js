import "./ofertaStyles.css";
import peopleWorking from "./peopleWorking.webp";
import { Button } from "../ButtonComponent/Button";
import { pakiety } from "./ofertaPositions/listOfOferta";

export function Oferta() {
  return (
    <>
      <div className="introDiv">
        <h1>Poznaj nasze pakiety</h1>
      </div>
      <div className="ofertaDiv">
        <div className="pannelsRow">
          {pakiety.map((item) => (
            <Panel item={item} />
          ))}
        </div>
        {pakiety.map((item) => (
          // <h2>TEST</h2>;
          <InfoPanel item={item} />
        ))}
      </div>
    </>
  );
}

function Panel({ item }) {
  return (
    <div
      className={item.selected ? "selected panelFromRowDiv" : "panelFromRowDiv"}
    >
      <div className="headingDiv">
        <h2>{item.name}</h2>
        <h2>{item.cena}zł</h2>
      </div>
      <div className="prosDiv">
        <ul>
          {item.pros.map((value) => (
            <li>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttonDiv">
        <Button
          margin={"5px 0px 5px 0px"}
          backgroundColor={item.selected ? "#2b2828" : "#F15946"}
        >
          Zamów
        </Button>
        <Button
          margin={"5px 0px 5px 0px"}
          backgroundColor={item.selected ? "#2b2828" : "#F15946"}
          width="60%"
        >
          Dowiedz się więcej
        </Button>
      </div>
    </div>
  );
}
function InfoPanel({ item }) {
  console.log("test");
  return (
    <div className="infoPanel">
      <div className="title">
        <h2>{item.name}</h2>
        <h2>{item.cena} zł</h2>
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="content">
        <ul>
          {item.pros.map((element) => (
            <li>
              <h3>{element}</h3>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <Button
            margin={"5px"}
            backgroundColor={item.selected ? "#2b2828" : "#F15946"}
            className="buttons"
          >
            Zamów
          </Button>
          <Button
            margin={"5px"}
            className="buttons"
            backgroundColor={item.selected ? "#2b2828" : "#F15946"}
          >
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </div>
  );
}
