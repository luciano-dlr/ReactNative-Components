import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title:string
}

export const HeaderTitle = ({title}:Props) => {

    const {top} = useSafeAreaInsets()

  return (

    <View style={{marginTop:top + 20,marginBottom:30}}>

        <Text style={{
          ...styles.title,
            color:'black'
          
          }}>{title}</Text>
        
      </View>
  )
}


