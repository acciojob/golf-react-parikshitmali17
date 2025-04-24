// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

    
//     buttonClickHandler() {
//    this.state.renderBall=true;
//    this.state.ballPosition="5px"


//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;
import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // Determines if the ball should be rendered
      posi: 0 // Ball's position in pixels from the left
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start the game, render the ball
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Handle right arrow key press to move the ball
  handleKeyDown(event) {
    if (event.keyCode === 39) {
      // ArrowRight key
      this.setState((prevState) => ({
        posi: prevState.posi + 5
      }));
    }
  }

  // Set up the keydown event listener
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Clean up the event listener
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Render the start button or the ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.posi}px`, position: "absolute" }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
