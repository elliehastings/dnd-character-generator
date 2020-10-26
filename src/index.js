import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import characterRaces from "./races";
import characterClasses from "./classes";

function Header(props) {
  return <h1>Who Is My D&D Character?</h1>;
}

function Generate(props) {
  return (
    <a href="#" className="link" onClick={props.onClick}>
      Hit me with a character!
    </a>
  );
}

function Character(props) {
  return <div className="content">{props.character}</div>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: undefined };
  }

  handleClick() {
    const character = generateCharacter();
    this.setState({ character: character });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Generate onClick={() => this.handleClick()} />
        <Character character={this.state.character} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

function generateCharacter() {
  const characterRace = pickRandomElementFrom(characterRaces);
  const characterClass = pickRandomElementFrom(characterClasses);

  return `${characterRace} ${characterClass}`;
}

function pickRandomElementFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
