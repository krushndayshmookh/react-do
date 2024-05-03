import { useState } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

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
      <div>
        <InputText
          type="text"
          placeholder="Username"
          id="usernameInput"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username}
        />
        <InputText
          type="password"
          placeholder="Password"
          id="passwordInput"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <Button
          onClick={() => {
            handleLogin()
          }}>
          Login
        </Button>
      </div>
    </>
  )
}

export default Auth
