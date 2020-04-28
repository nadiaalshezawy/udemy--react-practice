import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //optional to define constructor if we have intial setup
  constructor(props) {
    // should call super to avoid error
    super(props);
    //only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // call back function it will run in future
        this.setState({ lat: position.coords.latitude });
      },

      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //react should have render

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <div>Latitiude:{this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
