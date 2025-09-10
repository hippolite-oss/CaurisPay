import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Content1 from "./components/Content1/Content1";
import Content2 from "./components/Content/Content2/Content2";
import Content3 from "./components/Content/Content3/Content3";
import Content4 from "./components/Content/Content4/Content4";
import Content5 from "./components/Content/Content5/Content5";
import Content6 from "./components/Content/Content6/Content6";
import Content7 from "./components/Content7/Content7";
import Content8 from "./components/Content8/Content8";
import { useScrollAnimation } from "./useScrollAnimation"; 
import "./App.css";

function App() {
  useScrollAnimation(); 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route
          path="/"
          element={
            <>
              <section id="home" className="animate-on-scroll fade-up"><Content1 /></section>
              <section id="products" className="animate-on-scroll fade-left"><Content2 /></section>
              <section id="customers" className="animate-on-scroll fade-right"><Content3 /></section>
              <section id="pricing" className="animate-on-scroll zoom-in"><Content4 /></section>
              <section id="learn" className="animate-on-scroll fade-up"><Content5 /></section>
              <section id="content6" className="animate-on-scroll fade-left"><Content6 /></section>
              <section id="content7" className="animate-on-scroll fade-right"><Content7 /></section>
              <section id="content8" className="animate-on-scroll zoom-in"><Content8 /></section>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
