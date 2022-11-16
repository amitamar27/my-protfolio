import "./assets/sass/global.scss";
import { Header } from "./cmps/Header";
import { ParticlesBgc } from "./cmps/ParticlesBgc";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationRoutes } from "./cmps/AnimationRoutes";
import { Footer } from "./cmps/Footer";
import { useState } from "react";
import { BlurPage } from "./cmps/BlurPage";

export function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuStatus = (toggleStatus) => {
    setIsOpenMenu(toggleStatus);
  };

  return (
    <main className="app">
      <BlurPage isOpenMenu={isOpenMenu} />
      <Router>
        <Header callBack={menuStatus} />
        <ParticlesBgc />
        <AnimationRoutes />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
