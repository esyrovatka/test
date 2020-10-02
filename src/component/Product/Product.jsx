import React, { Component } from "react";
import Button from "../Buttons/Button/Button";
import ButCount from "../Buttons/ButtonCount/ButCount";
import "./Product.sass";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToShop } from "../../actions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  addToCart = (name, price, count) => () => {
    this.props.addToShop(name, price, count);
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    const { name, price, sale } = this.props;
    return (
      <div className="Product">
        <h1>{name}</h1>
        <h2>${price}</h2>
        <h2>{sale}</h2>
        <ButCount
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          count={count}
        />
        <Button
          onClick={this.addToCart(name, price, count)}
          nameBut="Добавить"
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addToShop }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);
