import "./App.css";
import ReactPlayer from "react-player";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState(true);
  const [playing, setPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=sBws8MSXN7A";

  function toggleTab(flag) {
    setSelectedTab(flag);
    setPlaying(flag);
  }

  return (
    <div className="App">
      <div className="tab">
        <button className="tablinks" onClick={() => toggleTab(true)}>
          Tab 1
        </button>
        <button className="tablinks" onClick={() => toggleTab(false)}>
          Tab 2
        </button>
      </div>
      {selectedTab ? (
        <div className="tabcontent">
          <ReactPlayer url={videoUrl} playing={playing} controls />
        </div>
      ) : (
        <div className="tabcontent">
          <h1>Tab2 content</h1>
        </div>
      )}
    </div>
  );
}

export default App;
