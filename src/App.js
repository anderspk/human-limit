import React, { useState } from "react";
import SVG from "./images/svg";
import switchSoundMp3 from "./sounds/switch.mp3";
import spotlightSound from "./sounds/spotlight.mp3";
import staticSound from "./sounds/static.mp3";
import "./App.scss";
import { CSSTransition } from "react-transition-group";
import UIFx from "uifx";
import GlitchyText from "./components/glitchyText/glitchyText";
import StaticScreen from "./images/static.gif";

const switchSound = new UIFx(switchSoundMp3);
const spotlight = new UIFx(spotlightSound);
const staticNoise = new UIFx(staticSound);

const App = () => {
  const [active, setActive] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const [displayGameComponent, setDisplayGameComponent] = useState(false);

  return (
    <div className="app">
      <div className="container">
        {" "}
        <CSSTransition
          in={active}
          timeout={10000}
          unmountOnExit
          onExited={() => setDisplayGameComponent(true)}
        >
          <div className="landing-component">
            <SVG type="brain" className="brain" />
            <GlitchyText glitch={glitch}>Test the Human Limits</GlitchyText>
            <CSSTransition
              in={showButton}
              timeout={1500}
              unmountOnExit
              onExit={() => spotlight.play() && staticNoise.play()}
              onExited={() => {
                setGlitch(true);
                setActive(false);
              }}
            >
              <button
                className="start-button"
                onClick={() => {
                  setShowButton(false);
                  // setGlitch(true);
                }}
              >
                Start
              </button>
            </CSSTransition>
          </div>
        </CSSTransition>
        <CSSTransition in={displayGameComponent} unmountOnExit timeout={4000}>
          <div className="game-component">Game component</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default App;
