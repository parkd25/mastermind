import "./App.css";
import React from "react";
import Button from "@mui/material/Button";

class Mastermind extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Mastermind</div>
          <div>{this.state.numClicks}</div>
          <div>
            {/* <Button variant="contained" onClick={() => 1}>
            Increment
          </Button> */}
            <Button variant="contained">Contained</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default Mastermind;
