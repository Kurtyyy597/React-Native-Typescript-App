import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';

export default function TextInputTask1() {
    const [color, setColor] = useState("");

    return (
        <View>
            <TextInput keyboardType="numeric"
            placeholder='Enter your favorite color'
            value={color}
            onChangeText={text => setColor(text)}/>
            <Text> Your favorite color is {color} </Text>
            
        </View>
    )
}