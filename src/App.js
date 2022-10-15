import "./App.css";
import BookBuy from "./components/BookBuy";
import BusinessTools from "./components/BusinessTools";
import Header from "./components/Header";
import HeaderInfo from "./components/HeaderInfo";
import Hero from "./components/Hero";
import RechargePay from "./components/RechargePay";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";

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
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />

      {/* Business Tools section */}
      <BusinessTools />
    </div>
  );
}

export default App;
