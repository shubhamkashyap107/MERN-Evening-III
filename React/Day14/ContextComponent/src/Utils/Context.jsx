import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const[age, setAge] = useState(25)
    const[name, setName] = useState("Shubham")
    return(
        <UserContext.Provider value={{age, setAge, name, setName}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider


export function useMyContext()
{
    return useContext(UserContext)
}