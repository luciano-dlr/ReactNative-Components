import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem, Props } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfaces';
import { NavigationProp } from '@react-navigation/native';



const menuItems:MenuItem[] = [
  {
    name:'Animation 101',
    icon:'cube-outline',
    component:'Animation101Screen'
  },
  {
    name:'Animation 102',
    icon:'albums-outline',
    component:'Animation102Screen'
  },

]
export const HomeScreen = ({navigation}:Props) => {

  const {top} = useSafeAreaInsets()

  const renderListHeader = () => {
    return (
      <View style={{marginTop:top + 20,marginBottom:20}}>
        <Text style={styles.title}>Opciones de Menu</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return(
      <View style={{
        borderBottomWidth:1,
        marginVertical:8,
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
      ListHeaderComponent={()=> renderListHeader()}
      ItemSeparatorComponent={() =>  itemSeparator()}
    />

   </View>
  )
}



