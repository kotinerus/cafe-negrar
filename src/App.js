import { useState } from "react";
import { LandingPage } from "./LANDING_PAGE/LandingPage";
import { Navbar } from "./NAVBAR/Navbar";
import "./mainStyles/AppStyles.css";

import { MenuPage } from "./MENU/MenuPage";

export default function App() {
  const [landingPageIsOpen, setLandingPageIsOpen] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
