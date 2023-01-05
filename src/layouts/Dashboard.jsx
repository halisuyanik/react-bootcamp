import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
export default function Dashboard() {
  return (
    <div>
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
            </Routes>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
