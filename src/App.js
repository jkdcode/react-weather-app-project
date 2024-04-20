import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Jessheim" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://julie-makes-stuff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julie Didriksen
          </a>
          . It is open-sourced on{" "}
          <a
            href="https://github.com/jkdcode/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://julies-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
