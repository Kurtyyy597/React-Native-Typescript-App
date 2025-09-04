import React, {useState} from 'react';
import {Text, View, Switch} from 'react-native';

export default function MultipleSwitchesSwitch() {
    const [isWifi, setIsWifi] = useState<boolean>(false);
    const [isBluetooth, setIsBluetooth] = useState<boolean>(false);

    return (
        <View>
            <Text> Is wifi: {isWifi ? "On" : "Off"} </Text>
            <Switch
            value={isWifi}
            onValueChange={() => setIsWifi(prev => !prev)}/>

            <Text> Is Bluetooth: {isBluetooth ? "On" : "Off"} </Text>
            <Switch
            value={isBluetooth}
            onValueChange={() => setIsBluetooth(prev=>!prev)}/>
        </View>
    )
}

