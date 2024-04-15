import React from "react";
import favcap from "../asset/fav.png";
import "../styles/Whois.css";
import SimpleSlider from "./SimpleSlider";
function Whois() {
  return (
    <>
      <section className="section2">
        <div className="content">
          <img src={favcap} alt="hero image" width={111} height={87} />
          <h1>Who is Internee.pk?</h1>
          <p>
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan! We recognize the
            <br /> immense potential of talented individuals in the country and
            aim to bridge the gap between them
            <br /> and the thriving IT industry. Internee.pk offers a
            comprehensive range of virtual internship
            <br /> opportunities exclusively in the IT field.
          </p>
        </div>
          <SimpleSlider />      
      </section>
      <section style={{width:"100%", height:'100vh'}}>

      </section>
    </>
  );
}

export default Whois;
