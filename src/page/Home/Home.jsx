import React, { Component } from "react";
import Product from "../../component/Product/Product";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Product name="банан" price="10" sale="" />
        <Product name="яблоко" price="8" sale="" />
        <Product name="папайя" price="10" sale="$25 = 3кг" />
      </div>
    );
  }
}
export default Home;
