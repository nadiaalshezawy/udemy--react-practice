import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        // call back function it will run in future
        this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //react should have render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <div>
        <h1>Loading!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
