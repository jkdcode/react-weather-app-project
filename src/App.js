import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather app</h1>
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
