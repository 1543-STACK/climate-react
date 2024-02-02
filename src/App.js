import "./App.css";
import SearchCityForm from "./SearchCityForm";

function App() {
  return (
    <div>
      <div className="App mb-0">
        <div className="container">
          <SearchCityForm defaultCity="Durban" />
        </div>
      </div>
      <footer className="fw-bold text-center mt-0">
        This project is coded by{" "}
        <a
          href="https://github.com/1543-STACK/climate-react"
          target="_blank"
          rel="noreferrer"
        >
          Anu Govender
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/1543-STACK/climate-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
