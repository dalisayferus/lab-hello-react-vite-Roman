import logo from "../assets/1.png";
import menu from "../assets/2.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
}

export default Navbar;
