import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { Modal } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'


export const ModalScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext)


  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)


  return (
    <View style={{...styles.globalMargin,backgroundColor:colors.background}}>

      <HeaderTitle title='Modal' />

      <TouchableOpacity style={{...styles2.btn,backgroundColor:colors.card}} onPress={() => setIsVisible(true)}>

        <Text style={{...styles2.txt,color:'black'}}>Open Modal</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles2.btn} onPress={() => setIsVisible2(true)}>

        <Text style={styles2.txt}>Open Modal 2</Text>

      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={isVisible}
        transparent={true}
      >
        <View style={{
          flex: 1,
          marginTop: 400,
          backgroundColor: colors.primary,
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
        }}>

          <TouchableOpacity style={{ ...styles2.btn, margin: 40 }} onPress={() => setIsVisible(false)}>

            <Text style={styles2.txt}>Close Modal</Text>

          </TouchableOpacity>

        </View>

      </Modal>

      {/* modal2 */}
      <Modal
        animationType='fade'
        visible={isVisible2}
        transparent={true}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
        }}>

          <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            paddingBottom: 80,
            margin: 30,
            borderRadius: 14,
            shadowOpacity: 0.25,
            elevation: 40,
            shadowColor: colors.primary,
            shadowOffset: {
              width: 0,
              height: 40
            }

          }}>

            

            <Text style={{fontSize:40,paddingVertical:30,fontWeight:'700',color:'black'}}>Modal</Text>
            <Text>Cuerpo del modal</Text>

            <TouchableOpacity style={styles2.btn} onPress={() => setIsVisible2(false)}>

              <Text style={styles2.txt}>Close Modal 2</Text>

            </TouchableOpacity>
          </View>


        </View>

      </Modal>

    </View>
  )
}

const styles2 = StyleSheet.create({

  btn: {
    backgroundColor: 'white',
    opacity: 0.8,
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10

  },
  txt: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    opacity: 0.8
  }

});


