import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

export default function SwitchTask2() {
    const [wifi, setIsWifi] = useState<boolean>(false);
    const [bluetooth, setIsBluetooth] = useState<boolean>(false);
    const [darkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <View>
            <Text> Wifi: {wifi ? "on" : "off"} </Text>
            <Switch
            value={wifi}
            onValueChange={() => setIsWifi(prev=>!prev)}
            thumbColor={wifi ? "blue" : "gray"}
            trackColor={{ true: "lightblue", false: "lightgray" }}/>

            <Text> Bluetooth: {bluetooth ? "On" : "Off"}</Text>
            <Switch
            value={bluetooth}
            onValueChange={() => setIsBluetooth(prev=>!prev)}
            thumbColor={wifi ? "blue" : "gray"}
            trackColor={{ true: "lightblue", false: "lightgray" }}/>

            <Text> Dark mode: {darkMode ? "on" : "off"} </Text>
            <Switch
            value={darkMode}
            onValueChange={() => setIsDarkMode(prev=>!prev)}
            thumbColor={wifi ? "blue" : "gray"}
            trackColor={{ true: "lightblue", false: "lightgray" }}/>
        </View>
    )
}