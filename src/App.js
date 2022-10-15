import "./App.css";
import BookBuy from "./components/BookBuy";
import Header from "./components/Header";
import HeaderInfo from "./components/HeaderInfo";
import Hero from "./components/Hero";
import RechargePay from "./components/RechargePay";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* header */}
      <Header />
      <HeaderInfo />

      {/* Hero section */}
      <Hero />

      {/* Other sections */}
      <RechargePay />
      <BookBuy />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
