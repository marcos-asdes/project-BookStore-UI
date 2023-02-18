import React, { useState, createContext } from 'react'

const LoginModalContext = createContext()

function LoginModalProvider({ children }) {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)
  const [modalSignUpIsVisible, setModalSignUpIsVisible] = useState(false)

  function clickListener(e) {
    const classNameString = e.target.className
    if (typeof classNameString === 'string') {
      const classNameArray = classNameString.split(' ')
      if (classNameArray.includes('exit-modal')) {
        setModalSignInIsVisible(false)
        setModalSignUpIsVisible(false)
        window.removeEventListener('click', clickListener)
      }
    }
  }

  function switchModal() {
    setModalSignInIsVisible(!modalSignInIsVisible)
    setModalSignUpIsVisible(!modalSignUpIsVisible)
  }

  function exitModal() {
    setModalSignInIsVisible(false)
    setModalSignUpIsVisible(false)
    window.removeEventListener('click', clickListener)
  }

  return (
    <LoginModalContext.Provider
      value={{
        modalSignInIsVisible,
        setModalSignInIsVisible,
        modalSignUpIsVisible,
        clickListener,
        exitModal,
        switchModal
      }}
    >
      {children}
    </LoginModalContext.Provider>
  )
}

export { LoginModalProvider, LoginModalContext }
