import { createContext, useState } from "react";

export const DemoContext = createContext()


function DemoContextProvider({children})
{
    const[name, setname] = useState("Shubham")
    return (
        <DemoContext.Provider value={{name, setname}}>
            {children}
        </DemoContext.Provider>
    )
}


export default DemoContextProvider