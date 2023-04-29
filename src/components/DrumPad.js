import React from "react";

export function DrumPad({ drumSounds, clickHandler }) {
  // create an array of <div> elements with audio elements inside them
  const drumPadBuilder = drumSounds.map((item) => (
    <div
      className="drum-pad"
      id={item.key}
      key={item.key}
      onClick={clickHandler}
    >
      {/* key associated with audio clip */}
      {item.keyPressed}
      {/* audio element with the audio file URL, id that matches the key pressed */}
      <audio
        src={item.url}
        className="clip"
        id={item.keyPressed}
        key={item.keyPressed}
      />
    </div>
  ));

  // Return container with all drum pads created by drumPadBuilder
  return <div id="drum-container">{drumPadBuilder}</div>;
}
