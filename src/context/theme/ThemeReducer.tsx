import React from "react"
import { Theme } from "@react-navigation/native"

type ThemeAction = 
   | {type:'light_theme'} 
   | {type:'dark_theme'} 
    


export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor:string
}


export const lightTheme:ThemeState = {
    currentTheme:'light',
    dividerColor:'rgba(0,0,0,0.7)',
    dark:false,
    colors:{
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}
export const darkTheme:ThemeState = {
    currentTheme:'dark',
    dividerColor:'rgba(0,0,0,0.7)',
    dark:true,
    colors:{
        primary: '#75CEDB',
        background: 'black',
        card: 'white',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    }
}

export const themeReducer = (state:ThemeState,action:ThemeAction):ThemeState => {


    switch (action.type) {
        case 'light_theme':
            
            return {...lightTheme}
    
       
        case 'dark_theme':
            
            return {...darkTheme}
    
       
    
        default:
            return state
    }

}