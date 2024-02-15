import React from 'react'
import prompt from 'react-native-prompt-android';
import { Alert, View,Button } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
// import { Button } from 'react-native'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Soy una alerta', 'Click Afuera para cerrar', [
            {
              text: 'Cerrar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'OKEY', onPress: () => console.log('OK Pressed')},
           
          ],
          {
            cancelable:true,
            onDismiss:() => console.log('dismiss click Afuera'),
             
          }
          );
    }

    const showPrompt = () => {

      // IOS
      // Alert.prompt(
      //   'Estas seguro?',
      //   'esta accion no se peude revertir',
      //   (valor:string) => console.log('soy valor',{valor}),
      //   'default',
      //   'hola prompt',
      //   'number-pad'
      // )
      
      //Android
      prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: '123',
            placeholder: 'placeholder'
        }
    );


    }





  return (
    <View style={styles.globalMargin}>

        <HeaderTitle title='Alert' />

        <Button
        title='Mostrar Alerta'
        onPress={showAlert}
        />

        <View style={{height:8}}/>

        <Button
        title='Mostrar Prompt'
        onPress={showPrompt}
        />
      
    </View>
  )
}


