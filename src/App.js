import coffeBg from "./coffee-beans-background.png";
import waiter from "./waiterJPG.jpeg";
import send from "./send.png";
import "./scss/AppStyles.css";
export default function App() {
  return (
    <>
      <Navbar />
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

      <div className="menuDiv">
        <div className="menuDiv_text">
          <h2>Zasmakuj się w naszej kawie</h2>
          <p>
            Nie ma nic lepszego niż przepyszna kawa ze świeżo palonych ziaren
          </p>
        </div>
        <img src={coffeBg} />
      </div>
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
