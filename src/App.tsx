import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Footer } from "./layout/footer/Footer";
import { ParticleReact } from "./components/particleReact/ParticleReact";
import { ButtonBackToTop } from "./components/ButtonBackToTop";

function App() {
  return (
    <div className="App">
      <ParticleReact />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Slogan />
      <Footer />
      <ButtonBackToTop />
    </div>
  );
}

export default App;
