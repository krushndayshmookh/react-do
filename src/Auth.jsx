import { useState } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { Card } from 'primereact/card'

function Auth({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    fetch('https://react-do-server-production.up.railway.app/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        alert('User created successfully')
        setUsername('')
        setPassword('')
        console.log(json)
        onLogin(username)
      })
  }

  const handleSignIn = () => {
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
      <Card className="p-6 rounded-xl max-w-md mx-auto bg-slate-200 mt-8">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <FloatLabel>
              <InputText
                type="text"
                id="usernameInput"
                onChange={e => {
                  setUsername(e.target.value)
                }}
                value={username}
                className="w-full"
              />
              <label htmlFor="usernameInput" className="text-gray-500">
                Username
              </label>
            </FloatLabel>
          </div>
          <div className="w-full">
            <FloatLabel>
              <InputText
                type="password"
                placeholder="Password"
                id="passwordInput"
                onChange={e => {
                  setPassword(e.target.value)
                }}
                value={password}
                className="w-full"
              />
              <label htmlFor="passwordInput" className="text-gray-500">
                Password
              </label>
            </FloatLabel>
          </div>
          <div>
            <Button
              onClick={() => {
                handleSignIn()
              }}
              className="w-full"
              icon="pi pi-sign-in"
              iconPos="right"
              label="Sign In"
            />
            <Button
              onClick={() => {
                handleSignUp()
              }}
              className="w-full mt-4 bg-green-700"
              label="Sign Up"
              icon="pi pi-user-plus"
              iconPos="right"
            />
          </div>
        </div>
      </Card>
    </>
  )
}

export default Auth
