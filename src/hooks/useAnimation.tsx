import { useRef } from "react"
import { Animated, Easing } from "react-native"


export const useAnimation = () => {

    const opacity  = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(0)).current
    const position2 = useRef(new Animated.Value(0)).current



    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start(() => {
            // console.log('termino la animacion');
        })


    

    }


    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start()
        Animated.timing(
            position, {
            toValue: -300,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.bounce,
        }
        ).start()
    }


    const startMovingPosition = (initPosition:number,duration:number = 300 ) => {

        position.setValue(-300)

        
        Animated.timing(
            position, {
            toValue:0,
            duration,
            useNativeDriver: true,
            easing: Easing.bounce
        }
        ).start()

    }
    const finishMovingPosition = (initPosition:number,duration:number = 1500 ) => {

        position2.setValue(-300)

        
        Animated.timing(
            position2, {
            toValue:-300,
            duration,
            useNativeDriver: true,
            easing: Easing.bounce
        }
        ).start()

    }

   



    return {
        opacity,
        fadeIn,
        fadeOut,
        position,
        position2,
        startMovingPosition,
        finishMovingPosition

    }
}


