import React from "react";
import "./about.css";
import image004 from "../video/image004.png";
const About = () => {
  return (
    <div>
      <div className="about">
      
      Luminarc is now one of the world's leading tableware brands. 
      <br/>
      It spreads its French style across borders 
        <br />
        in nearly 160 countries, with 400 million glass items sold each year.
      </div>
      <img
        style={{
          marginBottom: "3%",
          marginTop: "3%",
          width: "1000px",
          height: "1000",
          marginLeft: "17%",
        }}
        src={image004}
      />
      <div>
        <p className="test2">
          {" "}
          At Luminarc is, we develop innovative concepts with a flair for the right
          mix of customer requirements and contemporary trends. We conquered the
          market with cosmetic products, we are leading developers of practical
          and environmentally friendly dispensing systems and pioneers in the
          field of natural and sustainable cosmetics.
        </p>
        <p className="test2">
          {" "}
          We develop beauty products of the highest possible quality at the
          lowest possible price. For us, this represents the democratization of
          beauty. It also means respecting the planet by working in the most
          sustainable and resource-efficient way possible. <br /> We are a
          trust-based company with the courage to take risks and the desire to
          try something new! We all follow the guiding principle of High
          Performance & People Focus: We put people at the heart of our daily
          activities, react flexibly to change, constantly strive for
          improvement and always do our best. And all this happens with a lot of
          joy, energy and mutual support. Like in a real family. d'entraide.
          Comme dans une vraie famille.
          <br /> <br /> “We don't see our employees as resources, but as human
          beings who have helped us achieve much and with whom we still want to
          achieve much more. We work together on the basis of courage and trust,
          successfully changing many things that were once considered the norm
          in our industry.“
        </p>
      </div>
    </div>
  );
};

export default About;
