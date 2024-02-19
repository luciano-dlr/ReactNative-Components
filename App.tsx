import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';




export const App = () => {
  return (
    <AppState>
        <Navigation />
    </AppState>
  )
}


//Typar children como JSX
const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

