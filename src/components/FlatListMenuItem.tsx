import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from "react-native-vector-icons/Ionicons";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



export interface Props {
    menuItem: MenuItem,
    navigation?: StackNavigationProp<any, any>
    // navigation?: ScreenComponentType<ParamListBase, "HomeScreen">
}

// ScreenComponentType<ParamListBase, "HomeScreen">

export const FlatListMenuItem:React.FC<Props> = ({ menuItem,navigation }: Props) => {

    // const navigation = useNavigation()



    return (
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation?.navigate(menuItem.component)}
        >

        <View style={styles.container}>

           <View style={{flexDirection:'row'}}>

                <Icon
                    name={menuItem.icon}
                    color='#5856D6'
                    size={30}
                />

                <Text style={styles.itemText}>{menuItem.name}  </Text>
           </View>


            <View>

                <Icon
                    name='chevron-forward-outline'
                    color='#5856D6'
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
        color: 'black',
        fontWeight:'600'
    }

});

