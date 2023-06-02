import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import AddItem from "./Components/Additem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10",
      quantity: 0,
    },
    {
      price: 10000,
      name: "Iphone 6",
      quantity: 0,
    },
    {
      price: 999,
      name: "Iphone case",
      quantity: 0,
    },
  ];

  //Hook
  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);

  //increment Function
  const incrementquantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };
  //Decrement Function
  const decrementquantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  //Reset Quantity
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };

  //Remove Item
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index , 1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };

  //Add Item
  const addItem = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0}
    );
    setProductList(newProductList)
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementquantity={incrementquantity}
          decrementquantity={decrementquantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
