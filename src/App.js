import coffeBg from "./coffee-beans-background.png";
import waiter from "./waiterJPG.jpeg";
import send from "./send.png";
import workingMen from "./working-men.jpg";
import "./scss/AppStyles.css";
export default function App() {
  return (
    <>
      <Navbar />
      {/* POCZĄTEK DO POPRAWY */}
      <div className="welcomeDiv"></div>

      <div className="welcomeDiv_text">
        <h1>NEGRAR</h1>
        <h2>Twoje miejsce na rozwinięcie skrzydeł</h2>
        <h3>Zostań z nami na dłużej</h3>

        <form>
          <input placeholder="ADRES EMAIL" />
          <button>WYŚLIJ</button>
        </form>
      </div>
      {/* KONIEC DO POPRAWY */}

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

      <PanelImgLeft panelPallete="panel-secondary">
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
          <p>Twój sukces zaczyna się dziś.</p>
          <Button>Rezerwuj teraz</Button>
        </section>
      </PanelImgLeft>

      <PanelImgRight>
        <section>TEST</section>
        <img src={workingMen} />
      </PanelImgRight>
    </>
  );
}
function Navbar() {
  return (
    <nav className="navbarDiv">
      <h2>NEGRAR CAFE</h2>
      <h2>Menu</h2>
      <h2>Rezerwacja</h2>
      <h2>Oferta</h2>
    </nav>
  );
}

function Panel({ backgroundColor = "#2b2828", color = "#f4eded", children }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      className="panel  "
    >
      {children}
    </div>
  );
}

function PanelImgLeft({ panelPallete = "panel-primary", children }) {
  return <div className={`panel ${panelPallete} imgLeft`}>{children}</div>;
}
function PanelImgRight({ panelPallete = "panel-primary", children }) {
  return <div className={`panel ${panelPallete} imgRight`}>{children}</div>;
}
function Button({ children }) {
  return <button className="btn-info">{children}</button>;
}
