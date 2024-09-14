import { createContext, useContext } from "react";
export const ToggleContext=createContext({
    themeMode:"light",
    lightMode:()=>{},
    darkMode:()=>{}
})
export const ToggleContextProvider=ToggleContext.Provider;

export default function useToggle(){
    return useContext(ToggleContext)
}