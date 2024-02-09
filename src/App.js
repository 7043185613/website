import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Content2 from "./components/Content2";
import Services from "./components/Services";
import Description from "./components/Description";
import Footer from "./components/Footer";



const App = () => {
  const imageUrl =
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693634709950x571725371336623040%2Fgroup%25201.png?w=768&h=737&auto=compress&dpr=1.25&fit=max";
  const imageUrls = [
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694091812783x366206489516476240%2Faccessible.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694091353563x427962135909103940%2Fsave%2520money.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693983871436x808384253281401200%2FEnsure%2520availability.png?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694091525016x312557823631958140%2F24X7.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
  ];
  const imageURLs = [
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694000669614x505316982354909760%2FOutfit%2520Coordination.png?w=128&h=117&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694001179444x486920905286103400%2FEvent%2520Styling.png?w=128&h=120&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694001410976x941696328850271400%2FPersonalized%2520Recommendation.png?w=128&h=126&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694002260321x422168099443178430%2FReal%2520Time%2520Simulation.png?w=128&h=125&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694002309908x349878915740962100%2FVirtual%2520Personal%2520Advice.png?w=96&h=109&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1694002348176x101531332217567060%2FFashion%2520Advice.png?w=96&h=111&auto=compress&dpr=1.25&fit=max",
  ];
  const imageuRl =
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693645903546x480732409169784450%2FMission.png?w=512&h=510&auto=compress&dpr=1.25&fit=max";
  const imageURl =
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693646612325x790936366979261000%2FVision.png?w=512&h=511&auto=compress&dpr=1.25&fit=max";

  const imageurL = [
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648146787x511804926398789000%2Fdeepkal%2520Vasvani.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648064852x259655426939135360%2FRaj%25202.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648218647x448390029629642800%2FRaj.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693648263759x121358319192990110%2Fdiana.jpg?w=128&h=128&auto=compress&dpr=1.25&fit=max",
  ];

  return (
    <>
      <div className="web">
        <Header />
        <Content imageUrl={imageUrl} />
        <Content2 imageUrls={imageUrls} />
        <Services imageURLs={imageURLs} />
        <Description
          imageuRl={imageuRl}
          imageURl={imageURl}
          imageurL={imageurL}
        />

        <Footer/>
      </div>
    </>
  );
};

export default App;
