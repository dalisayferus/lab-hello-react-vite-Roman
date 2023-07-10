import "./App.css";
import Information from "./components/information";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="Information">
        <Information />
      </div>
    </div>
  );
}

export default App;
