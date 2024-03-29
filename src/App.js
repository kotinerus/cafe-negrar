import "./utilites/AppStyles.css";
import { Navbar } from "./NAVBAR/Navbar";

import { LandingPage } from "./LANDING_PAGE/LandingPage";
import { MenuPage } from "./MENU/MenuPage";

import { useState, useEffect, useRef } from "react";
import { Office } from "./OFFICE/Office";
import { Oferta } from "./OFERTA/Oferta";
import { Admin } from "./ADMIN/Admin";

export default function App() {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }, [currentPage]);
  });
  const panels = [
    { id: 1, value: <LandingPage />, text: "NEGRAR CAFE" },
    { id: 2, value: <MenuPage />, text: "Menu" },
    { id: 3, value: <Oferta />, text: "Oferta" },
    { id: 4, value: <Office />, text: "Biuro zdalne" },
    {
      id: 5,
      value: <Admin />,
      text: "Admina",
    },
  ];
  return (
    <>
      <Navbar
        colorPallete={"primaryWhiteOnPrimamryBlack"}
        colorHover={"hoverLightOrange"}
        showFirst={true}
      >
        {panels.map((i) => (
          <a
            className="item"
            key={i.id}
            onClick={() => setCurrentPage(i.value)}
          >
            {i.text}
          </a>
        ))}
      </Navbar>
      {currentPage}
    </>
  );
}
