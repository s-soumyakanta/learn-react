import React, { createContext } from 'react'
import CreateContext from './useContext/CreateContext'

const Name = createContext();
const LastName = createContext();
const App = () => {

  return (
    <>
    <Name.Provider value={"Soumyashree"}>
      <LastName.Provider value={"Soumyakanta"}>
    <CreateContext />

      </LastName.Provider>

    </Name.Provider>
    
    </>
  )
}

export default App
export {Name,LastName}