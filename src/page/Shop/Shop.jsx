import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.sass";
import Button from "../../component/Buttons/Button/Button";

class Shop extends Component {
  renderPrice(product) {
    if (product.name === "папайя" && product.count % 3 === 0) {
      return (
        <div>${product.price * product.count - (product.count / 3) * 5}</div>
      );
    } else {
      return <div>${product.price * product.count}</div>;
    }
  }

  render() {
    const { productsList } = this.props;
    if (productsList.length > 0) {
      return (
        <div>
          {productsList.map((product, index) => (
            <div key={index} className="products">
              <div>{product.name}</div>
              <div>{product.count} кг</div>
              {this.renderPrice(product)}
              <Button nameBut="Купить" />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="noSale">
          <h1>Нет покупок</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = store => ({
  productsList: store.product.productsList
});

export default connect(mapStateToProps)(Shop);
