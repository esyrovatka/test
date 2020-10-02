import React, { Component } from "react";
import "./Button.sass";

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className="Button">
          {this.props.nameBut}
        </button>
      </div>
    );
  }
}

export default Button;
