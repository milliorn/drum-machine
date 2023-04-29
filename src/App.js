import "./App.css";

function App() {
  const drumPads = [
    {
      key: "Q",
      id: "Heater-1",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      ),
    },
    {
      key: "W",
      id: "Heater-2",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      ),
    },
    {
      key: "E",
      id: "Heater-3",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      ),
    },
    {
      key: "A",
      id: "Heater-4",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      ),
    },
    {
      key: "S",
      id: "Clap",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      ),
    },
    {
      key: "D",
      id: "Open-HH",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      ),
    },
    {
      key: "Z",
      id: "Kick-Hat",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ),
    },
    {
      key: "X",
      id: "Kick",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      ),
    },
    {
      key: "C",
      id: "Closed-HH",
      audio: new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      ),
    },
  ];

  const handleClick = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        {drumPads.map((drumPad) => (
          <button
            className="drum-pad"
            id={drumPad.id}
            key={drumPad.id}
            onClick={() => handleClick(drumPad.audio)}
          >
            {drumPad.key}
            <audio
              src={drumPad.audio.src}
              className="clip"
              id={drumPad.key}
            ></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
