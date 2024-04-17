import React, { useContext } from "react";
const Context= React.createContext()

export const AppProvider=({children})=>{
    const [mobSel, setMobSel] = React.useState("");
    return <Context.Provider value={{mobSel,setMobSel}}>{children}</Context.Provider>
} 
export const useGlobal = ()=>{
    return useContext(Context)
}