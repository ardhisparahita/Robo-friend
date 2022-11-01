import React from 'react'
import {Button} from 'antd'

const Login = () => {
  const loginGoogle = () => {
    window.location.href='https://fadfaasd.herokuapp.com/api/v1/auth/google'
  }
  return (
    <div className="App">
            <Button type='primary' shape='round' size='medium' onClick={() => loginGoogle()}>Login Google</Button>
          </div>
  )
}

export default Login