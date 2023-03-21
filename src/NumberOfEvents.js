import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    number: 25,
    errorText: ""
  }

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
    this.props.updateEvents(null, inputValue);
    this.setState({ number: inputValue }); 
    if (inputValue > 25) {
        this.setState({ errorText: 'Select number from 1 to 25' });
    } else {
        return this.setState({ errorText: '' });
    }
};

  render() {
    return (
      <div className="NumberOfEvents">
        Number of Events:
        <input
          className="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;