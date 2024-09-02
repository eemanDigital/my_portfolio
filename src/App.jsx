import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";
import SocialMediaIcons from "./components/SocialMedia/SocialMediaIcons";
import About from "./components/About/About";

function App() {
  return (
    <main className="app">
      <div className="app-hero-container">
        <Header />
        <Hero />
        <SocialMediaIcons />
        <About />
      </div>
    </main>
  );
}

export default App;
