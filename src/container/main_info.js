import React from "react";
import ReactDOM from "react-dom";

function BioPath(props) {
  const bio = props.bio;
  const items = Object.keys(bio).map((index, value) => (
    <li className="bio-item" key={value}>
      {bio[index]}
    </li>
  ));
  return (
    <section>
      <h2>Personal Info</h2>
      <div>
        <ul className="bio">{items}</ul>
      </div>
    </section>
  );
}

export default BioPath;
