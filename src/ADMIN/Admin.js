import "./adminStyles.css";
import { useState } from "react";
import { listOfPositions } from "../MENU/menuPositions/listOfPositions";
import { v4 as uuidv4 } from "uuid";
export function Admin() {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [access, setAccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(true);
  const [currentItem, setCurrentItem] = useState([]);

  const [items, setItems] = useState([...listOfPositions]);
  // const inputLogin = "";

  function onChangeCurrPage(item) {
    setCurrentPage(false);
    setCurrentItem(item);
  }

  function onEnded() {
    setCurrentPage(true);
    console.log("DIZAŁA");
  }
  console.log(currentPage);

  function onItemsChange(itemsELement) {
    const itemOFListReduced = items.filter(
      (item) => item.id !== itemsELement.id
    );
    setItems([
      ...itemOFListReduced,
      { ...itemsELement, avaliable: !itemsELement.avaliable },
    ]);
  }

  function onChangeLogin(event) {
    event.preventDefault();
    setInputLogin(event.target.value);
  }
  function onChangePass(event) {
    event.preventDefault();
    setInputPass(event.target.value);
  }
  const LOGIN = "admin";
  const PASSWORD = "admin123";
  function logUser(inputLogin, inputPass) {
    inputLogin === LOGIN && inputPass === PASSWORD
      ? setAccess(true)
      : alert("Brak dostępu. Błędne dane");
  }
  return (
    <>
      {access && (
        <AdminConfiguration
          items={items}
          onItemsChange={onItemsChange}
          onChangeCurrPage={onChangeCurrPage}
          currentPage={currentPage}
          currentItem={currentItem}
          onEnded={onEnded}
        />
      )}

      {!access && (
        <div className="admin">
          <div className="formBox">
            <h2>PANEL ADMINA</h2>

            <h3>LOGIN</h3>
            <input
              value={inputLogin}
              onChange={(event) => onChangeLogin(event)}
              type="text"
            />
            <h3>HASŁO</h3>
            <input
              value={inputPass}
              type="password"
              onChange={(event) => onChangePass(event)}
            />
            <button onClick={() => logUser(inputLogin, inputPass)}>
              ZALOGUJ SIĘ
            </button>
          </div>
        </div>
      )}
    </>
  );
}
function AdminConfiguration({
  currentPage,
  items,
  onItemsChange,
  onChangeCurrPage,
  currentItem,
  onEnded,
}) {
  return (
    <div className="adminConfigContainer">
      <div className="basicInfo">
        <img src="https://i.pravatar.cc/300?img=3" />
        <h2>ADMIN</h2>
      </div>
      <div className="options">
        {!currentPage && <Change currentItem={currentItem} onEnded={onEnded} />}
        {currentPage &&
          items.map((item) => (
            <ElementRow
              item={item}
              onItemsChange={onItemsChange}
              key={uuidv4()}
              onChangeCurrPage={onChangeCurrPage}
              onEnded={onEnded}
            />
          ))}
      </div>
    </div>
  );
}
function ElementRow({ item, onItemsChange, onChangeCurrPage }) {
  return (
    <div
      className={"optionRow"}
      style={item.avaliable ? { opacity: "1" } : { opacity: "0.3" }}
    >
      <img src={item.img} />
      <h3>{item.name}</h3>
      <button onClick={() => onChangeCurrPage(item)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="32"
          width="32"
          class="bi bi-gear-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          class="bi bi-lock-fill"
          viewBox="0 0 16 16"
          onClick={() => onItemsChange(item)}
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
        </svg>
      </button>
    </div>
  );
}
function Change({ currentItem, onEnded }) {
  const [prices, setPrices] = useState(currentItem.price);
  const [name, setName] = useState(currentItem.name);

  function onReset() {
    setPrices(currentItem.price);
    setName(currentItem.name);
  }
  function onChangeName(nameB) {
    setName(nameB);
  }
  function onChangePrice(sizeS, priceS) {
    const item = prices.filter((item) => item.size === sizeS)[0];
    const rest = prices.filter((ele) => ele.size !== sizeS);

    setPrices([...rest, { ...item, price: Number(priceS) }]);
  }
  return (
    <div className="form">
      <h2>Zmiana produktu {name}</h2>
      <h3 className="nameText">Nazwa:</h3>
      <input
        className="nameInput"
        value={name}
        onChange={(val) => onChangeName(val.target.value)}
      />
      <h3 className="priceText">Cena:</h3>
      <div className="pricesBox">
        {prices.map((priceB) => (
          <>
            <h4>{priceB.size}</h4>
            <input
              className="priceInput"
              type="number"
              value={priceB.price}
              onChange={(item) => onChangePrice(priceB.size, item.target.value)}
            />
          </>
        ))}
      </div>
      <div className="buttons">
        <button className="change" onClick={() => onEnded()}>
          Zmień
        </button>
        <button className="clear" onClick={() => onReset()}>
          Wyczyść
        </button>
      </div>
    </div>
  );
}
