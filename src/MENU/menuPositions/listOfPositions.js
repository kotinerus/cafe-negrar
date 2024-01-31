import espresso from "./imgsOfPositions/espresso.webp";
import cappucino from "./imgsOfPositions/cappucino.webp";
import americano from "./imgsOfPositions/americano.webp";
import cafeCreme from "./imgsOfPositions/cafeCreme.webp";
import cortado from "./imgsOfPositions/cortado.webp";
import espressoDoppio from "./imgsOfPositions/espressoDoppio.webp";
import flatWhite from "./imgsOfPositions/flatWhite.webp";
import latteMacchiato from "./imgsOfPositions/latteMacchiato.webp";
import lungo from "./imgsOfPositions/lungo.webp";
import macchiato from "./imgsOfPositions/macchiato.webp";
import ristretto from "./imgsOfPositions/ristretto.webp";

import cafeSanta from "./imgsOfPositions/cafeSanta.webp";
import cappuzino from "./imgsOfPositions/cappuzino.webp";
import christmasFlatWhite from "./imgsOfPositions/christmasFlatWhite.webp";
import colourfulCoffeeDream from "./imgsOfPositions//colourfulCoffeeDream.webp";
import gingerbreadEspresso from "./imgsOfPositions/gingerbreadEspresso.webp";
import gingerHoneySurprise from "./imgsOfPositions/gingerHoneySurprise.webp";
import liquoriceMacchiato from "./imgsOfPositions/liquoriceMacchiato.webp";
import biscuitLatte from "./imgsOfPositions/biscuitLatte.webp";

import sandwichHam from "./imgsOfPositions/sandwichHam.webp";
import sandwichSalmon from "./imgsOfPositions/sandwichSalmon.webp";
import sandwichChicken from "./imgsOfPositions/sandwichChicken.webp";
import sandwichAvokado from "./imgsOfPositions/sandwichAvokado.webp";
import sandwichCheese from "./imgsOfPositions/sandwichCheese.webp";
import sandwichEgg from "./imgsOfPositions/sandwichEgg.webp";
import sandwichVegan from "./imgsOfPositions/sandwichVegan.webp";

import applePie from "./imgsOfPositions/applePie.webp";
import cherryPie from "./imgsOfPositions/cherryPie.webp";
import chocolatePie from "./imgsOfPositions/chocolatePie.webp";
import jellyPie from "./imgsOfPositions/jellyPie.webp";
import creamPie from "./imgsOfPositions/creamPie.webp";

import coffePie from "./imgsOfPositions/coffePlusPie.webp";
import coffeSandwich from "./imgsOfPositions/coffePlusSandwich.webp";

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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
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
    avaliable: true,
  },
];
