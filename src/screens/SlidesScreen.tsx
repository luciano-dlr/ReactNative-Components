import React, { useContext, useEffect } from 'react';
import { Animated, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { ImageSourcePropType, View, SafeAreaView, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/theme/ThemeContext';




const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType,
 
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any,any>{};

export const SlidesScreen = ({navigation}:Props) => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [buttonShow, setButtonShow] = useState(false)

  const {opacity,fadeIn} = useAnimation()
  // const navigation = useNavigation();

  const {theme:{colors}} = useContext(ThemeContext)
  

  useEffect(() => {

    if (activeIndex === 2) {
      fadeIn();
      setButtonShow(true)
    }
   
  }, [activeIndex,fadeIn])
  

  const renderItem = (item: Slide) => {

    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'
      }}>

        <Image source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{...styles.title,color:colors.primary}}>{item.title}</Text>
        <Text style={{...styles.subTitle,color:colors.text}}>{item.desc}</Text>


      </View>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: 50
    }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
        layout='default'
        onSnapToItem={(index) => {
          setActiveIndex(index)
        }}
      />
      <View style={styles.dotBtnContainer}>

        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 20,
            backgroundColor: colors.primary
          }}

        />

        {
          buttonShow &&
            
            <Animated.View style={{
              ...styles.btnNext,
              opacity,
              }} >

            <TouchableOpacity 
            style={{...styles.btnNext,backgroundColor:colors.primary}} 
            onPress={()=> navigation.navigate('HomeScreen')}
            >

              <Text style={{...styles.btnNextTxt,color:colors.background}}>Entrar</Text>
              <Icon name="chevron-forward-outline" color={colors.background} size={20}/>

            </TouchableOpacity>

            </Animated.View>
 
        }

      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6'
  },
  subTitle: {
    fontSize: 16,
    maxWidth: screenWidth - 80,
    color: 'black'
  },
  dotBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20, 
    alignItems: 'center', 
    
  },
  btnNext: {
    backgroundColor: '#5856D6',
    
    borderRadius:8,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    
    width:140,
    height:40
    

    
  },
  btnNextTxt:{
    fontSize:18,
    fontWeight:'500',
    color:'white'
  }


});



// flex:1,
// flexDirection:'column',
// alignItems:'stretch',
// justifyContent:'flex-start'
// position:'relative',
