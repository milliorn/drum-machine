import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Display } from "./components/Display";
import { DrumPad } from "./components/DrumPad";
import { drumSounds } from "./data/drumSounds";

// main app
export default function App() {
  const [currentSound, setCurrentSound] = useState("Neil Peart");

  // plays the drum sound when a drum pad is clicked or when keyboard key is pressed.
  function playSound(event) {
    try {
      // Find the drum pad that matches the key pressed or clicked by user.
      const drumKey = drumSounds.find(
        (item) =>
          item.keyCode === event.keyCode ||
          item.keyPressed === event.target.innerText
      );
      // Get the audio element that matches the drum pad and play it.
      const sound = document.getElementById(drumKey.keyPressed);
      const drumpad = document.getElementById(drumKey.key);

      sound.currentTime = 0;
      sound.play();
      // Add class to drum pad to show it is playing.
      drumpad.setAttribute("class", "drum-pad playing");
      setTimeout(
        // remove the 'playing' class from the drum pad.
        () => drumpad.setAttribute("class", "drum-pad"),
        sound.duration * 1000
      );

      // update sound that was just played.
      setCurrentSound(drumKey.key.replace("-", " "));
    } catch (error) {
      console.error(error);
      console.error(`${event.key} drumpad not mapped!`);
    }
  }

  // detect when a keyboard key is pressed.
  useEffect(() => {
    document.addEventListener("keydown", playSound);
    // unmounts to prevent memory leaks.
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
