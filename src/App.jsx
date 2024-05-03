import { useState } from 'react'

import Auth from './Auth.jsx'
import Todo from './Todo.jsx'

// import './App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const onLogin = (username) => {
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
            <button
              onClick={() => {
                onLogout
              }}>
              Log Out
            </button>
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
