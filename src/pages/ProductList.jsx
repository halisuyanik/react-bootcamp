import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import { addToCart } from "../redux/store/actions/cartActions";
import { toast } from 'react-toastify';
import ProductService from '../services/productService'

export default function ProductList() {
  const [products, setProducts]=useState([]);
  const dispatch=useDispatch();
  useEffect(()=>{
    let productService=new ProductService();
    productService.getProducts().then(result=>setProducts(result.data.data))

  },[])

  function handleAddToCart(product){
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete ekelendi`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Units in Stock</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products && products?.map((product)=>(
              <Table.Row key={product.id}>
              <Link to={`/product/${product.productName}`}><Table.Cell>{product.productName}</Table.Cell></Link>
              <Table.Cell>{product?.unitPrice}</Table.Cell>
              <Table.Cell>{product?.unitsInStock}</Table.Cell>
              <Table.Cell>{product?.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product?.category?.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={()=>handleAddToCart(product)} animated='vertical'>
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
          
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
