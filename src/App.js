import { useState } from "react";
import { LandingPage } from "./LANDING_PAGE/LandingPage";
import { Navbar } from "./NAVBAR/Navbar";
import "./mainStyles/AppStyles.css";

import { MenuPage } from "./MENU/MenuPage";
const listOfCoffes = [
  {
    name: "Czarna",
    price: 8,
  },
  {
    name: "Kawa z mlekiem",
    price: 8,
  },
  {
    name: "Cappucino",
    price: [10, 12, 14],
    category: "kawa",
    specialOffert: false,
    imgSrc: "name/urlOfImg",
  },
  {
    name: "Americano",
    price: 8,
  },
  {
    name: "Late Macchiato",
    price: 8,
  },
  {
    name: "Cafe au lait",
    price: 8,
  },
  {
    name: "Ristretto",
    price: 8,
  },
  {
    name: "Espresso",
    price: 8,
  },
  {
    name: "Espresso lungo",
    price: 8,
  },
  {
    name: "Espresso double",
    price: 8,
  },
  {
    name: "Caffe creama",
    price: 8,
  },
  {
    name: "Espresso macchiato",
    price: 8,
  },
  {
    name: "Melange",
    price: 8,
  },
];

export default function App() {
  const [landingPageIsOpen, setLandingPageIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [reservationIsOpen, setReservationIsOpen] = useState(false);
  const [offerIsOpen, setOfferIsOpen] = useState(false);

  function changeToLanding() {
    setLandingPageIsOpen(true);
    setMenuIsOpen(false);
    setReservationIsOpen(false);
    setOfferIsOpen(false);
  }
  function changeToMenu() {
    setLandingPageIsOpen(false);
    setMenuIsOpen(true);
    setReservationIsOpen(false);
    setOfferIsOpen(false);
  }
  function changeToReservation() {
    setLandingPageIsOpen(false);
    setMenuIsOpen(false);
    setReservationIsOpen(true);
    setOfferIsOpen(false);
  }
  function changeToOffer() {
    setLandingPageIsOpen(false);
    setMenuIsOpen(false);
    setReservationIsOpen(false);
    setOfferIsOpen(true);
  }

  return (
    <>
      <Navbar
        colorPallete={"primaryWhiteOnPrimamryBlack"}
        colorHover={"hoverLightOrange"}
      >
        <a className="item" onClick={changeToLanding}>
          <h2>NEGRAR CAFE</h2>
        </a>
        <a className="item" onClick={changeToMenu}>
          Menu
        </a>
        <a className="item" onClick={changeToReservation}>
          Rezerwacja
        </a>
        <a className="item" onClick={changeToOffer}>
          Oferta
        </a>
      </Navbar>
      {landingPageIsOpen && <LandingPage />}
      {menuIsOpen && <MenuPage />}
    </>
  );
}
