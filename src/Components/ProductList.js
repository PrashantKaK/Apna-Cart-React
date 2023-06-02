import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementquantity={props.incrementquantity}
        decrementquantity={props.decrementquantity}
        removeItem={props.removeItem}
        index={i}
      />
    );
  });
}
