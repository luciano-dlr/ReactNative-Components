import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import { Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn:boolean
    onChange: (value: boolean) => void;

}

export const CustomSwitch = ({isOn,onChange}:Props) => {
    
    const {theme:{colors}} = useContext(ThemeContext)


    const [isEnabled, setIsEnabled] = useState(isOn)

    const toggleSwitch = () => {

        setIsEnabled(!isEnabled);
        onChange(!isEnabled)

    }


  return (
    <Switch
        trackColor={{false: 'grey', true: colors.primary}}
        thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
  )
}


