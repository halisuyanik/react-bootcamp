import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Signedout({signIn}) {
  return (
    <div style={{margin:"0.5em"}}>
        <Button onClick={signIn}>Sign in</Button>
        <Button>Sign up</Button>
    </div>
  )
}
