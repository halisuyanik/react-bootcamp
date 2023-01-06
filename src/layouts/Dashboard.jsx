import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" exact element={<ProductList></ProductList>}></Route>
              <Route path="/products" exact element={<ProductList></ProductList>}></Route>
              <Route path="/product/:productName" element={<ProductDetail></ProductDetail>}></Route>
              <Route path="/cart" element={<CartDetail></CartDetail>}></Route>
              <Route path="/productadd" element={<ProductAdd></ProductAdd>}></Route>
            </Routes>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
