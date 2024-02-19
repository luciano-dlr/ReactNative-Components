import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {


    const {setDarkTheme,setLightTheme, theme:{colors}} = useContext(ThemeContext)


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Switch Tema' />

            <View style={styles2.container}>
                <TouchableOpacity 
                onPress={setDarkTheme}
                style={{
                    backgroundColor: colors.primary,
                    width: 150,
                    justifyContent: 'center',
                    height: 50,
                    borderRadius: 20
                }}>

                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                       Dark
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={setLightTheme}
                style={{
                    backgroundColor: colors.primary,
                    width: 150,
                    justifyContent: 'center',
                    height: 50,
                    borderRadius: 20
                }}>

                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Light 
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles2 = StyleSheet.create({
    
container:{
flex:1,
flexDirection:'row',
// alignItems:'stretch',
justifyContent:'space-between'
// position:'relative',
// Hola soy joita,
},

});


