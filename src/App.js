import "./App.css";
import Header from "./components/Header";
import HeaderInfo from "./components/HeaderInfo";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* header */}
      <Header />
      <HeaderInfo />

      {/* Hero section */}
      <Hero />
    </div>
  );
}

export default App;
