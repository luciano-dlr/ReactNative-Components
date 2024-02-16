import React from 'react'
import { CustomSwitch } from '../components/CustomSwitch'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { Text } from 'react-native'
import { useForm } from '../hooks/useForm'


export const TextInputScreen = () => {


    const { onChange, form } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    //Leio
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     isSubscribed: false
    // })

    // const onChange = (value: string, field: string) => {

    //     //Field es una propiedad computada
    //     setForm({
    //         ...form, [field]: value
    //     })
    // }

    // const onChange = (value: boolean | string, field: string) => {
    //     setForm({ ...form, [field]: value });
    // }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={{ backgroundColor: '#CCCCCC', flex: 1, paddingHorizontal: 10 }}>

                        <HeaderTitle title='Text Inputs' />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Ingrese su Nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value: string) => onChange(value, 'name')}
                        />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value: string) => onChange(value, 'email')}
                            keyboardType='email-address'

                            keyboardAppearance='dark'
                        />

                      

                    
                        <View style={stylesScreen.switchRow}>

                            <Text style={stylesScreen.switchText}>Subscribirse</Text>

                            <CustomSwitch 

                            isOn={form.isSubscribed} 
                            onChange={(value:boolean) => onChange(value,'isSubscribed')} />
                          
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 4)} />
                        <HeaderTitle title={JSON.stringify(form, null, 4)} />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Phone'
                            onChangeText={(value: string) => onChange(value, 'phone')}
                            keyboardType='phone-pad'

                        />

                    </View>

                </TouchableWithoutFeedback>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({

    inputStyle: {
        borderWidth: 2,
        opacity: 0.9,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        marginVertical: 10,
        fontWeight: '600',
        fontSize: 18
    },
    switchRow: {
        borderWidth:2,
        opacity:0.9,
        borderRadius: 8,
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderColor:'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        marginVertical: 8,
        
    
    
      },
      switchText: {
        fontSize: 19,
        fontWeight: '600',
      },

});

