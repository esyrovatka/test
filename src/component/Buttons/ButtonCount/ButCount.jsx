import React, { Component } from "react";
import "./ButCount.sass";

class ButCount extends Component {
  render() {
    return (
      <div className="Count">
        <button onClick={this.props.decrementCount}>-</button>
        <p> {this.props.count} кг </p>
        <button onClick={this.props.incrementCount}>+</button>
      </div>
    );
  }
}

export default ButCount;
