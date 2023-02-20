import React, { createContext, useContext } from 'react'

import signup from '../services/registerApi'

import { AuthContext } from './AuthContext'

const RegisterContext = createContext()

function RegisterProvider({ children }) {
  const { login, loading } = useContext(AuthContext)

  const registerUser = async (email, password, name, surname, phone) => {
    const response = await signup(email, password, name, surname, phone)
    console.log('register', response)

    if (response.status === 201) {
      login(email, password)
    }
  }

  return (
    <RegisterContext.Provider value={{ loading, registerUser }}>
      {children}
    </RegisterContext.Provider>
  )
}

export { RegisterProvider, RegisterContext }
