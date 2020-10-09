import React from "react";
import "./Picture.css";

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      animating: false,
      drivers: [
        { name: "Brad", number: 2 },
        { name: "Joey", number: 22 },
        { name: "Ryan", number: 12 },
        { name: "Denny", number: 11 },
        { name: "Kevin", number: 4 },
        { name: "Chase", number: 9 }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let rando = Math.floor(Math.random() * 6);
    this.setState({ num: rando, animating: true });
    setTimeout(() => {
      this.setState({ animating: false });
    }, 5000);
  }

  render() {
    return (
      <div className={`Card ${this.state.drivers[this.state.num].name}`}>
        <h4>Click the button to get a random Drivers information</h4>
        {/* Display button until you get Denny. Then display Winner! */}
        {this.state.drivers[this.state.num].name === "Denny" ? (
          <div>
            <h1>Winner!</h1>
            <p>Name: {this.state.drivers[this.state.num].name}</p>
            <p>Number: {this.state.drivers[this.state.num].number}</p>
          </div>
        ) : (
          <div>
            <button onClick={this.handleClick}>New Driver</button>
            <p>Name: {this.state.drivers[this.state.num].name}</p>
            <p>Number: {this.state.drivers[this.state.num].number}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Picture;
