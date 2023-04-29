import React from "react";

export function DrumPad({ drumSounds, clickHandler }) {
  const drumPadBuilder = drumSounds.map((item) => (
    <div
      className="drum-pad"
      id={item.key}
      key={item.key}
      onClick={clickHandler}
    >
      {item.keyPressed}
      <audio
        src={item.url}
        className="clip"
        id={item.keyPressed}
        key={item.keyPressed}
      />
    </div>
  ));

  return <div id="drum-container">{drumPadBuilder}</div>;
}
