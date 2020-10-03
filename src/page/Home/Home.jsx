import React, { Component } from "react";
import Product from "../../component/Product/Product";

class Home extends Component {
  render() {
    const arrProduct = [
      { name: "банан", price: 10 },
      { name: "яблоко", price: 8 },
      { name: "папайя", price: 10, sale: "$25 = 3кг" }
    ];

    return (
      <div className="Home">
        {arrProduct.map((info, index) => (
          <div key={index}>
            <Product name={info.name} price={info.price} sale={info.sale} />
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
