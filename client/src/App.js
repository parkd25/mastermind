import styles from "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import VerificationInput from "react-verification-input"; //https://github.com/andreaswilli/react-verification-input
//https://mui.com/material-ui/react-timeline/
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NumberPicker from "react-widgets/NumberPicker";

function isSignalSolved(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "B") {
      return false;
    }
  }
  return true;
}
const validColors = ["A", "G", "B", "Y", "O", "W"];
function make_random_code(l) {
  var newItems = [];
  for (var i = 0; i < l; i++) {
    var b = Math.floor(Math.random() * validColors.length);
    newItems.push(validColors[b]);
  }
  return newItems.join("");
}

function processGuess(str) {
  return str.toUpperCase();
}

function match(x, y) {
  var count = 0;
  for (let i in x) {
    if (y.includes(x[i])) {
      count++;
    }
  }
  return count;
}

function exact_match(str1, str2) {
  var count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      count++;
    }
  }
  return count;
}

function getSignal(secret, guess) {
  const numBlack = exact_match(secret, guess);
  const numWhite = match(secret, guess) - numBlack;
  var result = [];
  for (let i = 0; i < numBlack; i++) {
    result.push("B");
  }
  for (let i = 0; i < numWhite; i++) {
    result.push("W");
  }
  const numBlank = secret.length - numBlack - numWhite;
  for (let i = 0; i < numBlank; i++) {
    result.push("-");
  }
  return result.join("");
}

function deepcopy(array) {
  return JSON.parse(JSON.stringify(array));
}

// control all variables available to gamestate
function getInitGameState(l) {
  return {
    numClicks: 0,
    guess: "",
    history: [],
    timeStamps: [],
    secretCode: make_random_code(l),
    isSolved: false,
  };
}

class Mastermind extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitGameState(4);
  }
  onSubmit() {
    const signal = getSignal(this.state.secretCode, this.state.guess);
    const historyItem = this.state.guess + " -> " + signal;
    const timestr = String(new Date());
    var historyCopy = deepcopy(this.state.history);
    var timeStampsCopy = deepcopy(this.state.timeStamps);
    historyCopy.unshift(historyItem);
    timeStampsCopy.unshift(timestr);
    this.setState({
      history: historyCopy,
      timeStamps: timeStampsCopy,
      isSolved: isSignalSolved(signal),
    });
  }

  initializeGame() {
    this.setState(getInitGameState(this.state.secretCode.length));
  }

  renderSuccessDialog() {
    return (
      <Dialog
        open={this.state.isSolved}
        onClose={() => {
          this.setState({ isSolved: false });
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Secret Code Guessed!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Congratulations! You have guessed the secret code. You can choose to
            restart or try again with a different length code.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  renderHistory() {
    var timelineItemArray = [];
    for (let i = 0; i < this.state.history.length; i++) {
      timelineItemArray.push(
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            {this.state.timeStamps[i]}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{this.state.history[i]}</TimelineContent>
        </TimelineItem>
      );
    }
    return <Timeline>{timelineItemArray}</Timeline>;
  }

  updateCodeLength(l) {
    const newl = Math.max(l, 4);
    const newlUpperBound = Math.min(newl, 10);
    this.setState(getInitGameState(newlUpperBound));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Paper elevation={5} className={styles.paper}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Typography variant="h2">Mastermind</Typography>
              <Typography variant="h4">
                Letters A, G, B, Y, O, W can be inserted.
              </Typography>
              <label>Pick length of Code</label>
              <NumberPicker
                defaultValue={this.state.secretCode.length}
                step={1}
                min={4}
                max={8}
                onChange={(value) => this.updateCodeLength(value)}
              />
              <VerificationInput
                length={this.state.secretCode.length}
                onChange={(newguess) => {
                  this.setState({ guess: processGuess(newguess) });
                }}
                validChars={
                  validColors.join("").toUpperCase() +
                  validColors.join("").toLowerCase()
                }
                value={this.state.guess}
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
                <Button
                  variant="contained"
                  onClick={() => this.initializeGame()}
                >
                  Restart
                </Button>
              </ButtonGroup>
              <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
                Rules on How To Play
              </a>
              {this.renderHistory()}
              {this.renderSuccessDialog()}
            </Stack>
          </Paper>
        </header>
      </div>
    );
  }
}

export default Mastermind;
