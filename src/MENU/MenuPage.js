import { useState } from "react";
import { Button } from "../ButtonComponent/Button.js";
import { Navbar } from "../NAVBAR/Navbar";

import { listOfPositions } from "../menuPositions/listOfPositions.js";
import "./menuStyles.css";

const panels = [
  { id: 1, value: "sesonal", text: "Sezonowe hity" },
  { id: 2, value: "coffe", text: "Kawa" },
  { id: 3, value: "breakfast", text: "Śniadanie" },
  { id: 4, value: "sweet", text: "Na słodko" },
  { id: 5, value: "set", text: "Zestawy" },
];

export function MenuPage() {
  const [currentPanel, setCurrentPanel] = useState(null);
  function onCurrentPanel(e) {
    currentPanel === e ? setCurrentPanel(null) : setCurrentPanel(e);
  }
  return (
    <>
      <Navbar
        colorPallete={"primaryWhiteOnprimaryOrange"}
        colorHover={"hoverDarkOrange"}
        gridTemplate={"1fr 1fr 1fr 1fr 1fr"}
        showFirst={false}
      >
        {panels.map((e) => (
          <a
            className="item"
            value={e.value}
            onClick={(e) =>
              onCurrentPanel(e.currentTarget.getAttribute("value"))
            }
            key={e.id}
          >
            {e.text}
          </a>
        ))}

        <select name="postions" id="postions">
          {panels.map((e) => (
            <option
              className="item"
              value={e.value}
              onClick={(e) =>
                onCurrentPanel(e.currentTarget.getAttribute("value"))
              }
              key={e.id}
            >
              {e.text}
            </option>
          ))}
        </select>
      </Navbar>

      <PositionList currentPanel={currentPanel} />
      <Cart />
    </>
  );
}
function PositionList({ currentPanel }) {
  const filterArray =
    currentPanel !== null
      ? listOfPositions.filter((i) => i.type === currentPanel)
      : listOfPositions;

  return (
    <div className="menuPositionsPanels">
      {filterArray.map((e) => (
        <Position item={e} key={e.id} />
      ))}
    </div>
  );
  function Position({ item }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const { name, price, img } = item;

    function onSelectSize(e) {
      selectedSize === e ? setSelectedSize(null) : setSelectedSize(e);
    }

    return (
      <section className="item">
        <div className="base wrapper-img ">
          <img src={img} />
        </div>
        <div className="base wrapper-name">
          <h2>{name}</h2>
        </div>
        <div className="base wrapper-price">
          {price.map((item) => (
            <div
              className="product"
              style={
                selectedSize === item.size
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
              onClick={(e) => onSelectSize(item.size)}
              key={crypto.randomUUID()}
            >
              <h4>{item.size}</h4>
              <h4>{item.price}</h4>
            </div>
          ))}
        </div>
        {selectedSize && (
          <div className="base wrapper-button">
            <Button classPar="buttonObject">Dodaj do koszyka</Button>
          </div>
        )}
      </section>
    );
  }
}
function Cart() {
  return (
    <div className="shoppingCart">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    </div>
  );
}
