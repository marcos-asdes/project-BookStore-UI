import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { theme, StyledReset } from './styles'

import { AuthProvider } from '../contexts/AuthContext'
import { RegisterProvider } from '../contexts/RegisterContext'
import { LoginModalProvider } from '../contexts/LoginModalContext'
/* import { MobileProvider } from '../contexts/MobileContext' */

import Home from '../components/Desktop/Home'
/* import SignInMobile from '../components/Mobile/SignInMobile' */

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginModalProvider>
        <AuthProvider>
          <RegisterProvider>
            {/* <MobileProvider> */}
            <BrowserRouter>
              <StyledReset />
              <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/sign-in' element={<SignInMobile />} /> */}
              </Routes>
            </BrowserRouter>
            {/* </MobileProvider> */}
          </RegisterProvider>
        </AuthProvider>
      </LoginModalProvider>
    </ThemeProvider>
  )
}
