import './App.css';
import { HashRouter, Link, Route, Routes } from "react-router-dom";

function HomePage() {
  return <>
    This is HomePage
  </>;
}

function AboutPage() {
  return <>
    This is AboutPage
  </>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Gd-FD3-21-24!
        </p>
        <HashRouter>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/about">About</Link>
          <br/>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
