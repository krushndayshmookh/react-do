import { useState } from 'react'

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
        <input
          type="text"
          placeholder="Username"
          id="usernameInput"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          id="passwordInput"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <button
          onClick={() => {
            handleLogin()
          }}>
          Login
        </button>
      </div>
    </>
  )
}

export default Auth
