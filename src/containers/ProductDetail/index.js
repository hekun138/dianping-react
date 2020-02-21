import React, { Component } from "react";
import { connect } from "react-redux";
import ProductOverview from "./components/ProductOverview";
import ShopInfo from "./components/ShopInfo";
import Detail from "./components/Detail";
import Remark from "./components/Remark";
import BuyButton from "./components/BuyButton";
import Header from "../../components/Header";
import {
  actions as detailActions,
  getProduct,
  getRelatedShop
} from "../../redux/modules/detail";
import { bindActionCreators } from "redux";

class ProductDetail extends Component {
  handleBack = () => {
    this.props.history.goback();
  };

  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      return this.props.detailActions.loadProductDetail(productId);
    }
    if (!this.props.relatedShop) {
      this.props.detailActions.loadShopById(product.nearestShop);
    }
  }

  componentDidUpdate(preProps) {
    //第一次获取到产品详情时，需要继续获取关联的店铺信息
    if (!preProps.product && this.props.product) {
      this.props.detailActions.loadShopById(this.props.product.nearestShop);
    }
  }

  render() {
    const { product, relatedShop } = this.props;
    return (
      <div>
        <Header title="团购详情" onBack={this.handleBack} grey />
        {product && <ProductOverview data={product} />}
        {relatedShop && (
          <ShopInfo data={relatedShop} total={product.shopIds.length} />
        )}
        {product && (
          <div>
            <Detail data={product} />
            <Remark data={product} />
            <BuyButton productId={product.id} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.id;
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detailActions: bindActionCreators(detailActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
