import React, { createContext /* , useState */ } from 'react'

const MobileContext = createContext({})

function MobileProvider({ children }) {
  /*   const [mobileSignIn, setMobileSignIn] = useState(false) */

  return <MobileContext.Provider>{children}</MobileContext.Provider>
}

//value={{ mobileSignIn, setMobileSignIn }}

export { MobileProvider, MobileContext }
