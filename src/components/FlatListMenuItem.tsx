import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { HomeScreenProps } from '../screens/HomeScreen';
import { ThemeContext } from '../context/theme/ThemeContext';





export const FlatListMenuItem: React.FC<HomeScreenProps> = ({ menuItem, navigation }) => {

   
    const {theme:{colors}} = useContext(ThemeContext)

    



    return (
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation?.navigate(menuItem.component)}
        >

        <View style={styles.container}>

           <View style={{flexDirection:'row'}}>

                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={30}
                />

                <Text style={{...styles.itemText,color:colors.text}}>{menuItem.name}  </Text>
           </View>


            <View>

                <Icon
                    name='chevron-forward-outline'
                    color={colors.primary}
                    size={30}
                />

            </View>

        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20,
       
        fontWeight:'600'
    }

});

