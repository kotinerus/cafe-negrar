import coffeBg from "./imgsOfPanels/coffee-beans-background.png";
import workingMen from "./imgsOfPanels/working-men.jpg";
import office from "./imgsOfPanels/office.jpg";
import { Button } from "../../ButtonComponent/Button.js";

export const listOfPanels = [
  {
    id: "menu",
    text: (
      <section>
        <h2>Rozsmakuj się w naszej kawie</h2>
        <p>
          Nasza kawiarnia to miejsce, gdzie aromatyczne ziarna spotykają się z
          pasją i precyzją, tworząc niezapomniane smaki.
        </p>
        <p>
          Odkryj różnorodność naszego menu, które zaspokoi każdą kawową
          zachciankę i pozwoli Ci na prawdziwą podróż przez świat kawowych
          doznań.
        </p>
      </section>
    ),
    img: <img src={coffeBg} />,
    imgPosition: "right",
    backgroundColor: "#2b2828",
    color: "#f4eded",
  },
  {
    id: "reservation",
    text: (
      <section>
        <h2>
          Kreuj historię w <span>naszej</span> przestrzeni
        </h2>
        <p>
          Pracuj w otoczeniu pełnym innowacji, kreatywności i możliwości. Nasza
          przestrzeń to więcej niż biuro - to centrum, w którym Twoje pomysły
          nabierają życia.
        </p>
        <p>
          Tu spotkasz inspirujących ludzi, zbudujesz swoją markę i osiągniesz
          sukces. Rezerwuj swój stolik już teraz i stań się częścią historii
          sukcesu, która tworzy się właśnie w naszej przestrzeni.
        </p>
      </section>
    ),
    img: <img src={workingMen} />,
    imgPosition: "left",
    backgroundColor: "#f4eded",
    color: "#2b2828",
  },
  {
    id: "offer",
    text: (
      <section>
        <h2>Miejsce dla Ciebie</h2>
        <p>
          Poznaj ofertę naszej firmy i dołącz do grupy pracowitych i kreatywnych
          ludzi.
        </p>
        <p>
          W naszej ofercie znajdziesz możliwość założenia wirtualnego biura,
          wynajęcia przestrzeni biurowej oraz abonamentu uprawniającego do
          swobodnego poruszaniu się po naszym obiekcie
        </p>
      </section>
    ),
    img: <img src={office} />,
    imgPosition: "right",
    backgroundColor: "#2b2828",
    color: "#f4eded",
  },
];
