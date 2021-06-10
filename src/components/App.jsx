import React from "react";
import Entries from "./entries.component.jsx";
import emojipedia from "../emojipedia.js";

function makeEntry(props) {
  return (
    <Entries
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(makeEntry)}
    </div>
  );
}

export default App;
