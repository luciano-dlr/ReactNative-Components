import React, { useContext } from 'react'
import { ScrollView, View,RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useState } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';


export const PullToRefreshScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext)
  

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
        progressBackgroundColor={colors.primary}
        colors={['white','red','orange','blue','yellow','black']}
        style={{backgroundColor:colors.background}}
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

