import coffeBg from "../imgs/coffee-beans-background.png";
import workingMen from "../imgs/working-men.jpg";
import office from "../imgs/office.jpg";
import waiter from "../imgs/waiterJPG.jpeg";
import { PanelImgRight, PanelImgLeft } from "../PANELS/Panels";
import "./landingPageStyles.css";
import { Button } from "../ButtonComponent/Button.js";
export function LandingPage() {
  return (
    <>
      <Welcome />
      <PanelImgRight panelPallete={"panel-primary"} id={"menu"}>
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
      <PanelImgLeft panelPallete={"panel-secondary"} id={"rezerwacje"}>
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
      <PanelImgRight panelPallete={"panel-primary"} id={"oferta"}>
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
      <Footer />
    </>
  );
}
function Footer() {
  return <footer>Wszelkie prawa zastrzeżone © 2023 przez Negrar Cafe</footer>;
}
function Welcome() {
  return (
    <div className="welcomeDiv">
      <img src={waiter} />
      <article id="zapis">
        <h1>NEGRAR</h1>
        <h2>Twoje miejsce na rozwinięcie skrzydeł</h2>
        <h2>Zapisz się do newslettera</h2>
        <form>
          <input placeholder="ADRES EMAIL" />
          <button>WYŚLIJ</button>
        </form>
      </article>
    </div>
  );
}
