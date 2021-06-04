import React from 'react';
import ReactDOM from 'react-dom';


function Square(props) {
  const mystyle = {
    border: "solid 1px black",
    width: "50px",
    height: "60px",
    float: "left",
  };

  return (
    <div style={mystyle}>
      <img src={require("card.png")} alt={props.char} width="50" height="60">
      </img>
    </div>
  )
}

class Board extends React.Component {
  renderSquare(char, suit) {
    return (
      <Square
        char={char}
        suit={suit}
      />
    );
  }

  render() {
    const items = []

    for (const [suitIndex, suitValue] of this.props.suits.entries()) {
      for (const [suitIndex, charValue] of this.props.chars.entries()) {
        items.push(this.renderSquare(charValue, suitValue))
      }
    }

    return (
      <div style={{width: "676px"}}>
        {items}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.suits = ["clubs", "diamonds", "hearts", "spades"];
    this.chars = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            chars={this.chars}
            suits={this.suits}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);