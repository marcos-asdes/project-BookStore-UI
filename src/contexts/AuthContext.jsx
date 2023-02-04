import React, { useState, createContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(email, password) {
    console.log('login efetuado', { email, password })
    setUser({ id: '123', email })
  }

  function logout() {
    console.log('logout efetuado')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
