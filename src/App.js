import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          <a
            href="https://julie-makes-stuff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julie Makes Stuff
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/jkdcode/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://julies-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
