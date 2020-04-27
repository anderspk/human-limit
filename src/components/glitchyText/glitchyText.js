import React from "react";
import "./glitchyText.scss";

const GlitchyText = ({ glitch, children }) => (
  <div className="glitchy-text">
    <h1 className={glitch ? "glitch" : ""}>{children}</h1>
  </div>
);

export default GlitchyText;
