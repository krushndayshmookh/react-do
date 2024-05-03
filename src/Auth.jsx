import { useState } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { Card } from 'primereact/card'

function Auth({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username === 'muffincat' && password === 'password') {
      onLogin(username)
    } else {
      alert('Invalid username or password')
      setUsername('')
      setPassword('')
      onLogin(null)
    }
  }

  return (
    <>
      <Card>
        <FloatLabel>
          <InputText
            type="text"
            id="usernameInput"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            value={username}
          />
          <label htmlFor="usernameInput">Username</label>
        </FloatLabel>
        <FloatLabel>
          <InputText
            type="password"
            placeholder="Password"
            id="passwordInput"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
          <label htmlFor="passwordInput">Password</label>
        </FloatLabel>
        <Button
          onClick={() => {
            handleLogin()
          }}>
          Login
        </Button>
      </Card>
    </>
  )
}

export default Auth
