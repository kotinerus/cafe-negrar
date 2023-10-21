import { Button } from "./Button";
import { PanelImgLeft } from "./PanelImgLeft";
import { PanelImgRight } from "./PanelImgRight";
import Waiter from "./imgs/waiterJPG.jpeg";
import coffeBg from "./imgs/coffee-beans-background.png";
import workingMen from "./imgs/working-men.jpg";
import office from "./imgs/office.jpg";

import "./scss/AppStyles.css";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="welcomeDiv_bg"></div>
      <div className="welcomeDiv_text">
        <h1>NEGRAR</h1>
        <h2>Twoje miejsce na rozwinięcie skrzydeł</h2>
        <h3>Zostań z nami na dłużej</h3>
        <form>
          <input placeholder="ADRES EMAIL" />
          <button>WYŚLIJ</button>
        </form>
      </div>

      <PanelImgRight>
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
          <Button>Przejdź do menu</Button>
        </section>
        <img src={coffeBg} />
      </PanelImgRight>
      <PanelMobile colorPalette={"whiteOnBlack"}>
        <img src={coffeBg} />
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
          <Button>Przejdź do menu</Button>
        </section>
      </PanelMobile>
      <PanelImgLeft panelPallete="panel-secondary" id="menu">
        <img src={workingMen} />
        <section>
          <h2>
            Kreuj historię w <span>naszej</span> przestrzeni
          </h2>
          <p>
            Pracuj w otoczeniu pełnym innowacji, kreatywności i możliwości.
            Nasza przestrzeń to więcej niż biuro - to centrum, w którym Twoje
            pomysły nabierają życia.
          </p>
          <p>
            Tu spotkasz inspirujących ludzi, zbudujesz swoją markę i osiągniesz
            sukces. Rezerwuj swój stolik już teraz i stań się częścią historii
            sukcesu, która tworzy się właśnie w naszej przestrzeni.
          </p>
          <Button>Rezerwuj teraz</Button>
        </section>
      </PanelImgLeft>
      <PanelMobile colorPalette={"blackOnWhite"}>
        {" "}
        <img src={workingMen} />
        <section>
          <h2>
            Kreuj historię w <span>naszej</span> przestrzeni
          </h2>
          <p>
            Pracuj w otoczeniu pełnym innowacji, kreatywności i możliwości.
            Nasza przestrzeń to więcej niż biuro - to centrum, w którym Twoje
            pomysły nabierają życia.
          </p>
          <p>
            Tu spotkasz inspirujących ludzi, zbudujesz swoją markę i osiągniesz
            sukces. Rezerwuj swój stolik już teraz i stań się częścią historii
            sukcesu, która tworzy się właśnie w naszej przestrzeni.
          </p>
          <Button>Rezerwuj teraz</Button>
        </section>
      </PanelMobile>
      <PanelImgRight>
        <section>
          <h2>Miejsce dla Ciebe</h2>
          <p>
            Poznaj ofertę naszej firmy i dołącz do grupy pracowitych i
            kreatywnych ludzi.{" "}
          </p>
          <p>
            W naszej ofercie znajdziesz możliwość założenia wirtualnego biura,
            wynajęcia przestrzeni biurowej oraz abonamentu uprawniającego do
            swobodnego poruszaniu się po naszym obiekcie
          </p>
          <Button>Sprawdź ofertę</Button>
        </section>
        <img src={office} />
      </PanelImgRight>
      <PanelMobile colorPalette={"whiteOnBlack"}>
        <img src={office} />
        <section>
          <h2>Miejsce dla Ciebe</h2>
          <p>
            Poznaj ofertę naszej firmy i dołącz do grupy pracowitych i
            kreatywnych ludzi.{" "}
          </p>
          <p>
            W naszej ofercie znajdziesz możliwość założenia wirtualnego biura,
            wynajęcia przestrzeni biurowej oraz abonamentu uprawniającego do
            swobodnego poruszaniu się po naszym obiekcie
          </p>
          <Button>Sprawdź ofertę</Button>
        </section>
      </PanelMobile>

      <footer>Wszelkie prawa zastrzeżone © 2023 przez Negrar Cafe</footer>
    </>
  );
}
function Navbar() {
  return (
    <nav className="navbarDiv">
      <div>
        <h2>NEGRAR CAFE</h2>
      </div>
      <div className="item">
        <a href="#menu">Menu</a>
      </div>
      <div className="item">
        <a>Rezerwacja</a>
      </div>
      <div className="item">
        <a>Oferta</a>
      </div>
    </nav>
  );
}
function PanelMobile({ children, colorPalette }) {
  return (
    <div
      className={
        colorPalette === "whiteOnBlack"
          ? "panelMobile panel-primary"
          : "panelMobile panel-secondary"
      }
    >
      {children}
    </div>
  );
}