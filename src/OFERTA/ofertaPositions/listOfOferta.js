import offer1 from "../offer1.jpg";
import offer2 from "../office.png";
import offer3 from "../boxOffer.webp";
export const pakiety = [
  {
    id: 1,
    name: "pakiet basic",
    cena: 25,
    image: offer1,
    pros: ["Internet 100Mb/s", "Biurko siedzące", "Kawa S"],
    selected: false,
  },
  {
    id: 2,
    name: "pakiet standard",
    cena: 35,
    image: offer2,
    pros: [
      "Internet 300Mb/s",
      "Biurko regulowane",
      "Kawa M",
      "Ścianki akustyczne",
    ],
    selected: true,
  },
  {
    id: 3,
    name: "pakiet grande",
    cena: 45,
    image: offer3,
    pros: [
      "Internet 600Mb/s",
      "Biurko regulowane",
      "Kawa L",
      "Boks akustyczny",
    ],
    selected: false,
  },
];
