import React from "react";

function Matter(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="emoji.name">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Matter;
