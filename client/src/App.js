import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import VerificationInput from "react-verification-input"; //https://github.com/andreaswilli/react-verification-input
//https://mui.com/material-ui/react-timeline/

function make_random_code() {
  var items = ["A", "G", "B", "Y", "O", "W"];
  var newItems = [];

  for (var i = 0; i < 4; i++) {
    var b = Math.floor(Math.random() * items.length);
    newItems.push(items[b]);
    items.splice(b, 1);
  }
  return newItems.join("");
}

function getSignal(secret, guess) {
  return "BWWW";
}

function deepcopy(array) {
  return JSON.parse(JSON.stringify(array));
}

// control all variables availablt to gamestate
function getInitGameState() {
  return {
    numClicks: 0,
    guess: "",
    history: [],
    secretCode: make_random_code(),
  };
}

class Mastermind extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitGameState();
  }
  onSubmit() {
    const signal = getSignal(this.state.secretCode, this.state.guess);
    const historyItem = this.state.guess + "->" + signal;
    var historyCopy = deepcopy(this.state.history);
    historyCopy.unshift(historyItem);
    this.setState({ history: historyCopy });
  }

  initializeGame() {
    this.setState(getInitGameState());
  }

  renderHistory() {
    return (
      <div>
        {this.state.history.map(function (item) {
          return <li>{item}</li>;
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Mastermind</div>
          <VerificationInput
            length={4}
            value={this.state.guess}
            onChange={(newguess) => {
              this.setState({ guess: newguess });
            }}
            validChars={"AGBYOW"}
          ></VerificationInput>
          <ButtonGroup aria-label="small button group">
            <Button variant="contained" onClick={() => this.onSubmit()}>
              Submit
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                this.setState({ guess: this.state.secretCode });
              }}
            >
              Reveal
            </Button>
            <Button variant="contained" onClick={() => this.initializeGame()}>
              Restart
            </Button>
          </ButtonGroup>
          {this.renderHistory()}
        </header>
      </div>
    );
  }
}

export default Mastermind;
