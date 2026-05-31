import React from "react";
import "./App.css";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <Gallery />

      <section className="about-photographer">
        <div className="about-text">
          <h2>About the Photographer</h2>

          <p>
            Photographer's Visual Portfolio Album by Assol from 
            Vestby, Norway (Oslo area).
            A collection of moments, textures, light,
            architecture and personal perspective.
          </p>
        </div>

        <div className="about-images">
          <img src="/images/photo14.jpg" alt="" />

          <img src="/images/photo15.jpg" alt="" />
        </div>
      </section>

<section className="contact-section">

  <h2>Contacts</h2>

  <ContactForm />

  <div className="social-links">

    <a
      href="https://www.instagram.com/posledniyzakat?igsh=MWVkNXJxaTh2b3luZQ=="
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://t.me/cuteclumsiness"
      target="_blank"
      rel="noopener noreferrer"
    >
      Telegram
    </a>

    <a href="mailto:assolsokolova23@gmail.com">
      Email
    </a>

    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open CV
    </a>

  </div>

  <p className="email-text">
    assolsokolova23@gmail.com
  </p>

</section>


      <Footer />
    </div>
  );
}

export default App;