import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { theme, StyledReset } from './styles'

import { MobileProvider } from '../contexts/MobileContext'

import Home from '../components/Home'
import SignInMobile from '../components/Mobile/SignInMobile'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MobileProvider>
        <BrowserRouter>
          <StyledReset />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignInMobile />} />
          </Routes>
        </BrowserRouter>
      </MobileProvider>
    </ThemeProvider>
  )
}
