import {  createContext, useEffect, useReducer } from "react";
import { ThemeState, darkTheme, lightTheme, themeReducer } from "./ThemeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";


interface ThemeContextProps {
    theme:ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({children}:any) => {

    const colorScheme = useColorScheme()
    
    const [theme, dispatch] = useReducer(themeReducer,(colorScheme=== 'dark' ) ? darkTheme : lightTheme) 
  

    useEffect(() => {

        colorScheme === 'light' ? setLightTheme() :setDarkTheme()

    }, [colorScheme])

    //Alternativa con AppState
    useEffect(() => {

        AppState.addEventListener('change',(status)=> {
            
            console.log({status});
            // (Appearance.getColorScheme() === 'light')
            // ? setLightTheme() :setDarkTheme()
        })

    }, [colorScheme])
    

    const setDarkTheme = () => {
        console.log('set dark theme');
        dispatch({type:"dark_theme"})

    }
    const setLightTheme = () => {
        console.log('set light theme');
        dispatch({type:"light_theme"})
        
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>

            {children}

        </ThemeContext.Provider>
    )
}