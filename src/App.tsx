import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
        <Link to="/">Home</Link>
        <Link to="about">About</Link>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
