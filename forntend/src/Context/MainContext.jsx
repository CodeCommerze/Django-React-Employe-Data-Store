import React , {createContext, useState}from 'react'


export  const Context = createContext()
const MainContext = ({children}) => {
    const [data , setData] = useState({
        username:'',
        password : '',
        email: '',
        postition : ''
       })

      const [ editMode , setEditMode ] = useState(false)

  return (
    <Context.Provider value={{data , setData , setEditMode , editMode}}>
        {children}
    </Context.Provider>
  )
}

export default MainContext