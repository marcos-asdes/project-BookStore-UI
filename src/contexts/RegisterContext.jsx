import React, { useState, createContext, useContext } from 'react'

import signup from '../services/registerApi'

import { AuthContext } from './AuthContext'

const RegisterContext = createContext()

function RegisterProvider({ children }) {
  const [loadingRegister, setLoadingRegister] = useState(false)

  const { login } = useContext(AuthContext)

  const registerUser = async (email, password, name, surname, phone) => {
    setLoadingRegister(true)
    try {
      const response = await signup(email, password, name, surname, phone)
      console.log('register', response)
      if (response.status === 201) {
        setLoadingRegister(false)
        login(email, password)
      }
    } catch (e) {
      setLoadingRegister(false)
    }
  }

  return (
    <RegisterContext.Provider value={{ loadingRegister, registerUser }}>
      {children}
    </RegisterContext.Provider>
  )
}

export { RegisterProvider, RegisterContext }
