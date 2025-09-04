import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';

export default function BasicTextInput() {
    const [name, setName] = useState("");

    return (
        <View>
            <TextInput
            placeholder='enter anything'
            value={name}
            onChangeText={text => setName(text)}/>
            <Text> You typed {name} </Text>
        </View>
    )
}
