import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react'
export default function CartSummary() {
  const {cartItems}=useSelector(state=>state.cart);
  return (
    <div>
      <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              {cartItems && cartItems?.map((product)=>(
                <Dropdown.Item key="{product.product.id}">
                  {product.product.productName}
                  <Label>{product.quantity}</Label>
                </Dropdown.Item>
                
              ))}
              <DropdownDivider></DropdownDivider>
              <Dropdown.Item as={NavLink} to="/cart">jump to cart</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
