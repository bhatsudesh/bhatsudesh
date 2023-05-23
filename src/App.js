import './App.css';
import HomePage from './pages/HomePage';
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-V4FFK8JY2H");
  // Send pageview with a custom path
  ReactGA.send({ hitType: "pageview", page: "/", title: "Landing Page" });

  return (
    <div className="App bg-white dark:bg-black">
      <HomePage />
    </div>
  );
}

export default App;