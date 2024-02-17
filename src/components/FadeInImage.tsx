import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Porps {
    uri: string;
    style?:StyleProp<ImageStyle>
}

export const FadeInImage = ({uri,style}:Porps) => {

    const {opacity,fadeIn} = useAnimation()

    const [isLoading, setIsLoading] = useState(false)


    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            

            {
                isLoading && <ActivityIndicator 
                style={{position:'absolute'}} 
                color='#5856D6' 
                size={50}/>
            }
            
            <Animated.Image 
            source={{uri}}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={()=> {
                setIsLoading(false);
                fadeIn()
            }}
            style={{
                ...style as any,
                opacity
            }}
            />
        </View>
  )
}


