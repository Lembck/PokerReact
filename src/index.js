import React from 'react';
import ReactDOM from 'react-dom';
import cardImage from './card.png';

const centered = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const cardWidth = 75;
const cardHeight = 90;
const CW = String(cardWidth);
const CH = String(cardHeight);

const border = 1;
//const containerWidth = (cardWidth + 2 * border) * 13;

function Square(props) {
  let color = "black";
  if (props.suit == "♦" || props.suit == "♥") {
    color = "red";
  }

  let content = <img src={cardImage} alt={props.char} width={CW} height={CH}></img>
  if (props.flipped) {
    content = <div style={centered}>{props.char} {props.suit}</div>
  }

  const mystyle = {
    border: "solid 1px black",
    width: cardWidth + "px",
    height: cardHeight + "px",
    float: "left",
    position: "relative",
    color: color,
  };

  return (
    <div style={mystyle}>
      {content}
    </div>
  )
}

class Board extends React.Component {
  renderSquare(char, suit, flipped) {
    return (
      <Square
        char={char}
        suit={suit}
        flipped={flipped}
      />
    );
  }

  render() {
    const items = []

    for (const [suitIndex, suitValue] of this.props.suits.entries()) {
      for (const [charIndex, charValue] of this.props.chars.entries()) {
        let flip = true;
        if (suitIndex - charIndex % 2) {
          flip = false;
        }
        items.push(this.renderSquare(charValue, suitValue, flip))
      }
    }

    const wid = "1001px";
    return (
      <div style={{width: wid}}>
        {items}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.suits = ["♣", "♦", "♥", "♠"];
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