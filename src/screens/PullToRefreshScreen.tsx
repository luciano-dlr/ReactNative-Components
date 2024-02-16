import React from 'react'
import { ScrollView, View,RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useState } from 'react';


export const PullToRefreshScreen = () => {

  
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>()

  const onRefresh = () => {

    setRefreshing(true);

    setTimeout(()=> {
      console.log('terminamos');
      setRefreshing(false)
      setData('Hola mundo')
    },7000)
  }
  
  
  return (
    <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        progressViewOffset={50}
        progressBackgroundColor={'#5856D6'}
        colors={['white','red','orange','blue','yellow','black']}
        style={{backgroundColor:'#5856D6'}}
        tintColor={'white'}
      />
    }>
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull To Refresh' />

        {
          data && <HeaderTitle title={data} />
        }

      </View>
    </ScrollView>
  )
}

