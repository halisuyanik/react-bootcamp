import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function Signedin({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"/>
            <Dropdown pointing="top left">
              <Dropdown.Menu>
                <Dropdown.Item text="my account" icon="info"/>
                <Dropdown.Item onClick={signOut} text="sign out" icon="sign-out"/>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
