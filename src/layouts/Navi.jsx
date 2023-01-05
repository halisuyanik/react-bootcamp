import React, {useState} from 'react'

import CartSummary from './CartSummary'
import {  Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import Signedout from './Signedout'
import Signedin from './Signedin'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated]=useState(true);

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
          <Menu.Item
            name='home'

          />
          <Menu.Item
            name='messages'

          />
          <Menu.Menu position='right'>
            <CartSummary></CartSummary>
            {isAuthenticated?<Signedin signOut={handleSignOut}></Signedin>:<Signedout signIn={handleSignIn}></Signedout>}
          </Menu.Menu>
        </Container>
       
      </Menu>
    </div>
  )
}
