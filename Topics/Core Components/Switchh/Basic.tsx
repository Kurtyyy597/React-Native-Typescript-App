import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';


export default function SwitchBasics() {
    const [enabled,setIsEnabled] = useState<boolean>(false);

    const toggleSwitch = () => setIsEnabled(prev => !prev);

    return (
        <View style={{padding: 20}}>
            <Switch
            onValueChange={toggleSwitch}
            value={enabled}
            thumbColor={enabled ? "Gray" : "Blue"}
            trackColor={{false: "lightgray", true: "lightblue"}}/>
            </View>
    )
}
            
     