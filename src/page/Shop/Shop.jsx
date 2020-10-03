import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.sass";
import Button from "../../component/Buttons/Button/Button";

class Shop extends Component {
  renderPrice(product) {
    let a = product.price * product.count;

    if (product.count < 1) {
      return (
        <div className="noSale">
          <h1>Недопустимая покупка</h1>
        </div>
      );
    } else if (product.name === "папайя" && product.count % 3 === 0) {
      return (
        <div>
          <div>${a - (product.count / 3) * 5}</div>
          <Button nameBut="Купить" />
        </div>
      );
    } else {
      return (
        <div>
          <div>${a}</div>
          <Button nameBut="Купить" />
        </div>
      );
    }
  }

  allPrice(productsList) {
    return (
      <div>
        {productsList.reduce(
          (previousValue, product) =>
            previousValue + product.price * product.count,
          0
        )}
      </div>
    );
  }

  render() {
    const { productsList } = this.props;
    return (
      <div className="mane">
        {productsList.map((product, index) => (
          <div key={index} className="products">
            <div>{product.name}</div>
            <div>{product.count} кг</div>

            {this.renderPrice(product)}
          </div>
        ))}
        <div className="allPrice">
          <h1>Всего:</h1>

          <div>{this.allPrice(productsList)}</div>
          <Button nameBut="Купить все" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  productsList: store.product.productsList
});

export default connect(mapStateToProps)(Shop);
