import React, { useState, useEffect, createContext } from 'react'

import signin from '../services/authApi'
import api from '../services/Api'
//import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

function AuthProvider({ children }) {
  //const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const response = await signin(email, password)
    console.log('login', response.data)

    const loggedUser = response.data.user
    const token = response.data.token

    localStorage.setItem('user', JSON.stringify(loggedUser))
    localStorage.setItem('token', token)

    api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(loggedUser)
    // navigate('/')
    // replace useNavigate with exitModal
  }

  function logout() {
    console.log('logout')

    localStorage.removeItem('user')
    localStorage.removeItem('token')

    api.defaults.headers.Authorization = null

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
// check feasibility in applying the useMemo in the variable 'user'

export { AuthProvider, AuthContext }
