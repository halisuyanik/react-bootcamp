import React, {useState} from 'react'

import CartSummary from './CartSummary'
import {  Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import Signedout from './Signedout'
import Signedin from './Signedin'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated]=useState(true);
  const {cartItems}=useSelector(state=>state.cart);
  function handleSignOut(){
    setIsAuthenticated(false);
  }

  function handleSignIn(){
    setIsAuthenticated(true);
  }

  return (
    <div>
       <Menu inverted fixed>
        <Container>
          <NavLink to="/"><Menu.Item
            name='home'

          /></NavLink>
          <Menu.Menu position='right'>
            {cartItems.length>0 && <CartSummary></CartSummary>}
            
            {isAuthenticated?<Signedin signOut={handleSignOut}></Signedin>:<Signedout signIn={handleSignIn}></Signedout>}
          </Menu.Menu>
        </Container>
       
      </Menu>
    </div>
  )
}
