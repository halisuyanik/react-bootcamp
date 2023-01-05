import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
              <DropdownDivider></DropdownDivider>
              <Dropdown.Item as={NavLink} to="/cart">jump to cart</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
