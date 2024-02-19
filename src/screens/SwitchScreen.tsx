import React, { useContext, useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext)


  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const { isActive, isHungry, isHappy } = state;


  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value
    })
  }


  return (

    <View style={{ paddingHorizontal: 8, flex: 1, backgroundColor: colors.background }}>

      <HeaderTitle title='Switches' />

      <View style={{...styles.switchRow,backgroundColor:colors.card,borderColor:colors.text}}>
        <Text style={{...styles.switchText}}>is Active</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>

      <View style={{...styles.switchRow,backgroundColor:colors.card,borderColor:colors.text}}>
        <Text style={styles.switchText}>is Hungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>

      <View style={{...styles.switchRow,backgroundColor:colors.card,borderColor:colors.text}}>
        <Text style={styles.switchText}>is Happy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>


      <Text style={{...styles.switchText,color:colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>

    </View>
  )
}


const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    padding: 10,
    margin: 10,
    borderRadius: 12,
    borderWidth:2,
    


  },
  switchText: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'black'
  },

});


