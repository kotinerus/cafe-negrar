import { Button } from "../LANDING_PAGE/LandingPage";
import { Navbar } from "../NAVBAR/Navbar";
import espresso from "../imgs/EspressoPNG.png";
import "./menuStyles.css";

export function MenuPage() {
  return (
    <>
      <Navbar
        colorPallete={"primaryWhiteOnprimaryOrange"}
        colorHover={"hoverDarkOrange"}
        gridTemplate={"1fr 1fr 1fr 1fr 1fr"}
        showFirst={false}
      >
        <a className="item">Sezonowe hity</a>
        <a className="item">Kawa</a>
        <a className="item">Śniadania</a>
        <a className="item">Na słodko</a>
        <a className="item">Zestawy</a>
        <select name="postions" id="postions">
          <option value="Sezonowe hity">Sezonowe hity</option>
          <option value="Kawa">Kawa</option>
          <option value="Śniadania">Śniadania</option>
          <option value="Na słodko">Na słodko</option>
          <option value="Zestawy">Zestawy</option>
        </select>
      </Navbar>
      {/* <div className="menuPositionsPanels">
              {listOfCoffes.map((e) => (
                <Obiekt item={e} />
              ))}
            </div> */}
      <CategorySection />
    </>
  );
}
function Obiekt({ item }) {
  const { name, price } = item;
  return (
    <section className="item">
      <img src={espresso} />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <Button>Zamów</Button>
    </section>
  );
}
function CategorySection({ child }) {
  return <div>TEST</div>;
}
