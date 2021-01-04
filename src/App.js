import logo from "./logo.svg";
import "./App.css";
import Index from "./Components/Index/Index";
import About from "./Components/Index/About";
import City from "./Components/Cities/City";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Routes from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
