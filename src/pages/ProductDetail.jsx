import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductService from '../services/productService'
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productName } = useParams();
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductDetail(productName)
      .then(result => setProduct(result.data.data));
  },);
  return (
    <>

        <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.unitPrice}</Card.Meta>
            <Card.Description>
            <strong>{product.quantityPerUnit} </strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        
      </Card.Group>
      
    </>
  );
}
