import React from 'react'
import { List } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartDetail() {
  const {cartItems}=useSelector(state=>state.cart);

  return(
    <>
      {cartItems && cartItems?.map((product)=>(
        <List divided verticalAlign='middle' key={product.product.id}>
          <List.Item>
            <List.Content>
              <List.Header as='a'>{product.product.productName}</List.Header>
            </List.Content>
          </List.Item>
        </List>
      ))}
    </>
    
  )
}
