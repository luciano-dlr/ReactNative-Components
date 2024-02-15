import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem, Props } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';




export const HomeScreen = ({navigation}:Props) => {





  const itemSeparator = () => {
    return(
      <View style={{
        borderBottomWidth:1,
        marginVertical:10,
        opacity:0.4
      }}/>
    )
  }



  return (
   <View style={{flex:1, ...styles.globalMargin}}>
    

    

    <FlatList
      data={menuItems}
      renderItem={({item})=> <FlatListMenuItem menuItem={item} navigation={navigation}/>}
      keyExtractor={(item)=> item.name}
      ListHeaderComponent={()=> <HeaderTitle title='Components'/>}
      ItemSeparatorComponent={() =>  itemSeparator()}
    />

   </View>
  )
}



