import React from "react";
import Matter from "./Matter.jsx";
import emojipedia from "../emojipedia.js";

function createMatter(emoji) {
  return (
    <Matter
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createMatter)}</dl>
    </div>
  );
}

export default App;
