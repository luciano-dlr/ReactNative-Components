import React, { useContext, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/theme/ThemeContext'


export const Animation101Screen = () => {

    const {opacity,position,fadeIn,fadeOut,startMovingPosition,position2} = useAnimation()

    const {theme:{colors}} = useContext(ThemeContext)


    const handleFadeIn = () => {
        fadeIn();
        startMovingPosition(-300, 1300);
    };

    const handleFadeOut = () => {
        fadeOut();
        // finishMovingPosition(0)
    }

    // <Nachovski></Nachovski> sensei original 

    return (
        <View style={{...styles.container,backgroundColor:colors.background}}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                backgroundColor:colors.primary,
                transform:[{
                    translateY:position,
                    
                    
                },
                {
                    translateX:position2
                }
            
            
            ]
            }} />


            <View style={{...styles.btnContainer, backgroundColor:colors.background}}>
                <TouchableOpacity

                    onPress={handleFadeIn}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}> FadeIn</Text>

                </TouchableOpacity>

                <TouchableOpacity

                    onPress={handleFadeOut}
                    style={{...styles.btn,backgroundColor:'#A16868'}}
                >
                    <Text style={styles.btnText}> FadeOut</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#CCCCCC'
    },
    purpleBox: {
        width: 220,
        height: 200,
        borderRadius:12
    },
    btnContainer: {
        flexDirection:'row'
    },
    btn: {
        padding: 20,
        margin:20,
        borderRadius:9,
        backgroundColor: '#729E72'
    },
    btnText:{
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    }

});