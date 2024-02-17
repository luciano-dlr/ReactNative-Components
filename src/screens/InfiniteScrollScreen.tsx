import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage'

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const renderItem = (uri: string) => {
    return (

      <FadeInImage 
      uri={`https://picsum.photos/id/${uri}/1024/1024`}
      style={{
        width:'100%',
        height:400,
      
      }}
      />
      
      )
    }


    // <Image 
    // source={{uri:`https://picsum.photos/id/${uri}/500/400`}}
    // style={{
    //   width:'100%',
    //   height:400
    // }}
    // />

  const loadMore = () => {

    const newArray:number[] = [];
    for (let i =0; i< 5; i++){
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers,...newArray])
      
    }, 1500);


  }


  return (
    <View style={{flex:1}}>
      {/* <HeaderTitle title='Inifinite Scroll' /> */}

      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item})=> renderItem(item.toString())}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal:20}}>
              <HeaderTitle title='Inifinite Scroll' />
          </View>
      )}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}

        ListFooterComponent={ () => (
          <View style={{
            height:150,
            justifyContent:'center',
            alignItems:'center',
            width:'100%'
          }}>
            <ActivityIndicator size={40} color='#5856D6'/> 

          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({

  txtItem: {
    
    height: 150
  }
});