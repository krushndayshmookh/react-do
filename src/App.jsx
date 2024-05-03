import { useState } from 'react'

import Auth from './Auth.jsx'
import Todo from './Todo.jsx'

import { Button } from 'primereact/button'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const onLogin = username => {
    if (username) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }

  const onLogout = () => {
    setIsAuth(false)
  }

  return (
    <>
      {isAuth ? (
        <>
          <p>
            <Button
              onClick={() => {
                onLogout
              }}
              severity="danger"
              outlined
            >
              Log Out
            </Button>
          </p>
          <Todo onLogout={onLogout} />
        </>
      ) : (
        <Auth onLogin={onLogin} />
      )}
    </>
  )
}

export default App
