import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem} from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { MenuItem } from '../interfaces/appInterfaces';
import { StackNavigationProp } from '@react-navigation/stack';


export interface HomeScreenProps {
  menuItem: MenuItem;
  navigation?: StackNavigationProp<any, any>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {


  return (

   <View style={{flex:1, ...styles.globalMargin}}>
    
    <FlatList
      data={menuItems}
      renderItem={({item})=> <FlatListMenuItem menuItem={item} navigation={navigation}/>}
      keyExtractor={(item)=> item.name}
      ListHeaderComponent={()=> <HeaderTitle title='Components'/>}
      ItemSeparatorComponent={() =>  <ItemSeparator/>}
    />

   </View>
  )
}



