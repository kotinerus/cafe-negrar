import espresso from "./imgsOfPositions/espresso.png";
import cappucino from "./imgsOfPositions/cappucino.png";
import americano from "./imgsOfPositions/americano.png";
import cafeCreme from "./imgsOfPositions/cafeCreme.png";
import cortado from "./imgsOfPositions/cortado.png";
import espressoDoppio from "./imgsOfPositions/espressoDoppio.png";
import flatWhite from "./imgsOfPositions/flatWhite.png";
import latteMacchiato from "./imgsOfPositions/latteMacchiato.png";
import lungo from "./imgsOfPositions/lungo.png";
import macchiato from "./imgsOfPositions/macchiato.png";
import ristretto from "./imgsOfPositions/ristretto.png";

import cafeSanta from "./imgsOfPositions/cafeSanta.png";
import cappuzino from "./imgsOfPositions/cappuzino.png";
import christmasFlatWhite from "./imgsOfPositions/christmasFlatWhite.png";
import colourfulCoffeeDream from "./imgsOfPositions//colourfulCoffeeDream.png";
import gingerbreadEspresso from "./imgsOfPositions/gingerbreadEspresso.png";
import gingerHoneySurprise from "./imgsOfPositions/gingerHoneySurprise.png";
import liquoriceMacchiato from "./imgsOfPositions/liquoriceMacchiato.png";
import biscuitLatte from "./imgsOfPositions/biscuitLatte.png";

import sandwichHam from "./imgsOfPositions/sandwichHam.png";
import sandwichSalmon from "./imgsOfPositions/sandwichSalmon.png";
import sandwichChicken from "./imgsOfPositions/sandwichChicken.png";
import sandwichAvokado from "./imgsOfPositions/sandwichAvokado.png";
import sandwichCheese from "./imgsOfPositions/sandwichCheese.png";
import sandwichEgg from "./imgsOfPositions/sandwichEgg.png";
import sandwichVegan from "./imgsOfPositions/sandwichVegan.png";

import applePie from "./imgsOfPositions/applePie.png";
import cherryPie from "./imgsOfPositions/cherryPie.png";
import chocolatePie from "./imgsOfPositions/chocolatePie.png";
import jellyPie from "./imgsOfPositions/jellyPie.png";
import creamPie from "./imgsOfPositions/creamPie.png";

import coffePie from "./imgsOfPositions/coffePlusPie.png";
import coffeSandwich from "./imgsOfPositions/coffePlusSandwich.png";

export const listOfPositions = [
  {
    id: 1,
    name: "Espresso",
    price: [
      { size: "S", price: 9 },
      { size: "M", price: 12 },
      { size: "L", price: 15 },
    ],
    img: espresso,
    type: "coffe",
  },
  {
    id: 2,
    name: "Cappucino",
    price: [
      { size: "S", price: 10 },
      { size: "M", price: 14 },
      { size: "L", price: 18 },
    ],
    img: cappucino,
    type: "coffe",
  },
  {
    id: 3,
    name: "Americano",
    price: [
      { size: "S", price: 8 },
      { size: "M", price: 10 },
      { size: "L", price: 12 },
    ],
    img: americano,
    type: "coffe",
  },
  {
    id: 4,
    name: "Cafe creme",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: cafeCreme,
    type: "coffe",
  },
  {
    id: 5,
    name: "Cortado",
    price: [
      { size: "S", price: 10 },
      { size: "M", price: 13 },
      { size: "L", price: 16 },
    ],
    img: cortado,
    type: "coffe",
  },
  {
    id: 6,
    name: "Espresso Doppio",
    price: [
      { size: "S", price: 12 },
      { size: "M", price: 16 },
      { size: "L", price: 21 },
    ],
    img: espressoDoppio,
    type: "coffe",
  },
  {
    id: 7,
    name: "Flat White",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 14 },
      { size: "L", price: 19 },
    ],
    img: flatWhite,
    type: "coffe",
  },
  {
    id: 8,
    name: "Latte Macchiato",
    price: [
      { size: "S", price: 12 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: latteMacchiato,
    type: "coffe",
  },
  {
    id: 9,
    name: "Lungo",
    price: [
      { size: "S", price: 9 },
      { size: "M", price: 12 },
      { size: "L", price: 15 },
    ],
    img: lungo,
    type: "coffe",
  },
  {
    id: 10,
    name: "Macchiato",
    price: [
      { size: "S", price: 10 },
      { size: "M", price: 13 },
      { size: "L", price: 16 },
    ],
    img: macchiato,
    type: "coffe",
  },
  {
    id: 11,
    name: "Ristretto",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 14 },
      { size: "L", price: 18 },
    ],
    img: ristretto,
    type: "coffe",
  },
  ///
  {
    id: 12,
    name: "Kanapka z szynką",
    price: [
      { size: "S", price: 8 },
      { size: "L", price: 15 },
    ],
    img: sandwichHam,
    type: "breakfast",
  },
  {
    id: 13,
    name: "Kanapka z łososiem",
    price: [
      { size: "S", price: 9 },
      { size: "L", price: 16 },
    ],
    img: sandwichSalmon,
    type: "breakfast",
  },
  {
    id: 14,
    name: "Kanapka z kurczakiem",
    price: [
      { size: "S", price: 8 },
      { size: "L", price: 15 },
    ],
    img: sandwichChicken,
    type: "breakfast",
  },
  {
    id: 15,
    name: "Kanapka z awokado",
    price: [
      { size: "S", price: 10 },
      { size: "L", price: 18 },
    ],
    img: sandwichAvokado,
    type: "breakfast",
  },
  {
    id: 16,
    name: "Kanapka z serem",
    price: [
      { size: "S", price: 9 },
      { size: "L", price: 16 },
    ],
    img: sandwichCheese,
    type: "breakfast",
  },
  {
    id: 17,
    name: "Kanapka wegańska",
    price: [
      { size: "S", price: 10 },
      { size: "L", price: 18 },
    ],
    img: sandwichVegan,
    type: "breakfast",
  },
  {
    id: 18,
    name: "Kanapka z jajkiem",
    price: [
      { size: "S", price: 9 },
      { size: "L", price: 16 },
    ],
    img: sandwichEgg,
    type: "breakfast",
  },
  {
    id: 19,
    name: "Cappuzino",
    price: [
      { size: "S", price: 10 },
      { size: "M", price: 14 },
      { size: "L", price: 18 },
    ],
    img: cappuzino,
    type: "sesonal",
  },
  {
    id: 20,
    name: "Christmas flat white",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: christmasFlatWhite,
    type: "sesonal",
  },
  {
    id: 21,
    name: "Colourful coffee dream",
    price: [
      { size: "S", price: 12 },
      { size: "M", price: 16 },
      { size: "L", price: 21 },
    ],
    img: colourfulCoffeeDream,
    type: "sesonal",
  },
  {
    id: 22,
    name: "Gingerbread espresso",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: gingerbreadEspresso,
    type: "sesonal",
  },
  {
    id: 23,
    name: "Ginger honey surprise",
    price: [
      { size: "S", price: 12 },
      { size: "M", price: 16 },
      { size: "L", price: 21 },
    ],
    img: gingerHoneySurprise,
    type: "sesonal",
  },
  {
    id: 24,
    name: "Liquorice macchiato ",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: liquoriceMacchiato,
    type: "sesonal",
  },
  {
    id: 25,
    name: "Biscuit latte",
    price: [
      { size: "S", price: 12 },
      { size: "M", price: 16 },
      { size: "L", price: 21 },
    ],
    img: biscuitLatte,
    type: "sesonal",
  },
  {
    id: 26,
    name: "Cafe santa",
    price: [
      { size: "S", price: 11 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ],
    img: cafeSanta,
    type: "sesonal",
  },
  {
    id: 27,
    name: "Ciasto z jabłkami",
    price: [
      { size: "S", price: 8 },
      { size: "L", price: 15 },
    ],
    img: applePie,
    type: "sweet",
  },
  {
    id: 28,
    name: "Ciasto wiśniowe",
    price: [
      { size: "S", price: 9 },
      { size: "L", price: 16 },
    ],
    img: cherryPie,
    type: "sweet",
  },
  {
    id: 29,
    name: "Ciasto czekoladowe",
    price: [
      { size: "S", price: 10 },
      { size: "L", price: 18 },
    ],
    img: chocolatePie,
    type: "sweet",
  },
  {
    id: 30,
    name: "Ciasto z galaretką",
    price: [
      { size: "S", price: 9 },
      { size: "L", price: 16 },
    ],
    img: jellyPie,
    type: "sweet",
  },
  {
    id: 31,
    name: "Ciasto kremowe",
    price: [
      { size: "S", price: 10 },
      { size: "L", price: 18 },
    ],
    img: creamPie,
    type: "sweet",
  },
  {
    id: 32,
    name: "Kawa z ciastkiem",
    price: [
      { size: "S", price: 15 },
      { size: "M", price: 25 },
      { size: "L", price: 35 },
    ],
    img: coffePie,
    type: "set",
  },
  {
    id: 33,
    name: "Kawa z kanapką",
    price: [
      { size: "S", price: 16 },
      { size: "M", price: 26 },
      { size: "L", price: 36 },
    ],
    img: coffeSandwich,
    type: "set",
  },
];
