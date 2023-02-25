import React, { createContext, useContext, useState } from 'react'


const stateContext = createContext()
export const useStateContext = ()=> useContext(stateContext)

const Context = ({children}) => {
    const [dataTask,SetDataTask]=useState(null)
    const [taskId,setTaskId]=useState(null)


  return (
    <stateContext.Provider value={{
        dataTask,
        SetDataTask,
        taskId,
        setTaskId
    }}>
   {children}
    </stateContext.Provider>
  )
}

export default Context