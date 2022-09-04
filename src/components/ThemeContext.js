import React ,{useState,useContext}from "react";
// import { ThemeContext } from "../App";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext()


export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    console.log("updated");
    return useContext(ThemeUpdateContext)
}
export function ThemeProvider({children}){
    const [darkTheme , setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme =>!prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
     )
}