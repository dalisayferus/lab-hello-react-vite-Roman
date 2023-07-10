import icon1 from "../assets/3.png";
import icon2 from "../assets/4.png";
import icon3 from "../assets/5.png";
import icon4 from "../assets/6.png";

function Information() {
  return (
    <div className="information">
      <img src={icon1} alt="iron1" />
      <h1>Declarative</h1>
      <p>React makes it painless to create interactive UIs</p>
      <img src={icon2} alt="icon2" />
      <h1>Components</h1>
      <p>Build encapsulated components that manage their state</p>
      <img src={icon3} alt="icon3" />
      <h1>Single-Way</h1>
      <p>A set of immutable values are passed to the components</p>
      <img src={icon4} alt="icon4" />
      <h1>JSX</h1>
      <p>Statically-typed designed to run on modern browsers</p>
    </div>
  );
}

export default Information;
