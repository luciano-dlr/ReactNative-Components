import React, { useContext } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    title:string
}

export const HeaderTitle = ({title}:Props) => {

  const {theme:{colors}} = useContext(ThemeContext)


    const {top} = useSafeAreaInsets()

  return (

    <View style={{marginTop:top + 20,marginBottom:30}}>

        <Text style={{
          ...styles.title,
            color:colors.text
          
          }}>{title}</Text>
        
      </View>
  )
}


