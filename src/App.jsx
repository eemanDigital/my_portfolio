import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";

function App() {
  return (
    <main className="app">
      <div className="app-hero-container">
        <Header />
        <Hero />
      </div>
    </main>
  );
}

export default App;
