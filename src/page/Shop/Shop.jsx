import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.sass";
import Button from "../../component/Buttons/Button/Button";

class Shop extends Component {
  renderPrice(product) {
    if (product.count < 1) {
      return (
        <div className="noSale">
          <h1>Недопустимая покупка</h1>
        </div>
      );
    } else if (product.name === "папайя" && product.count % 3 === 0) {
      return (
        <div>
          <div>${product.price * product.count - (product.count / 3) * 5}</div>
          <Button nameBut="Купить" />
        </div>
      );
    } else {
      return (
        <div>
          <div>${product.price * product.count}</div>
          <Button nameBut="Купить" />
        </div>
      );
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
