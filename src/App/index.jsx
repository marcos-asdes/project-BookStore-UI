import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { theme, StyledReset } from './styles'

import Home from '../components/Home'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StyledReset />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
