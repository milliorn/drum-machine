import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { DrumPad } from "./components/DrumPad";
import { Display } from "./components/Display";
import { drumSounds } from "./data/drumSounds";

export default function App() {
  const [currentSound, setCurrentSound] = useState("Neil Peart");

  function playSound(event) {
    try {
      const drumKey = drumSounds.find(
        (item) =>
          item.keyCode === event.keyCode ||
          item.keyPressed === event.target.innerText
      );
      const sound = document.getElementById(drumKey.keyPressed);
      const drumpad = document.getElementById(drumKey.key);

      sound.currentTime = 0;
      sound.play();
      drumpad.setAttribute("class", "drum-pad playing");
      setTimeout(
        () => drumpad.setAttribute("class", "drum-pad"),
        sound.duration * 1000
      );

      setCurrentSound(drumKey.key);
    } catch (error) {
      console.error(error);
      console.error(`${event.key} drumpad not mapped!`);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", playSound);
    return () => document.removeEventListener("keydown", playSound);
  }, []);

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <DrumPad drumSounds={drumSounds} clickHandler={playSound} />
        <Display display={currentSound} />
      </div>
    </div>
  );
}
