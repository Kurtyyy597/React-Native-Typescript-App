import React, {useState} from 'react';
import {Button, View, Text, Alert, TextInput} from 'react-native';

export default function ButtonTask1() {
    const [name, setName] = useState<string>("");

    return (
        <View>
            <TextInput
            placeholder='enter your name'
            value={name}
            onChangeText={text => setName(text)}/>
            
            

            <Button
            title='Greet Me'
            onPress={() => Alert.alert(`Hello ${name}`)}/>
            
        </View>
    )
}