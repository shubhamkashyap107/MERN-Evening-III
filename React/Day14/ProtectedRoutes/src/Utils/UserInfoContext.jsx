import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const userData = null
    // const userData = {username : "Shubham"}
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export function useMyContext()
{
    return useContext(UserContext)
}

export default UserContextProvider