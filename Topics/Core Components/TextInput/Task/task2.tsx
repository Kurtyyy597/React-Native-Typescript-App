import React, { useState } from 'react';
import {Text, View, TextInput} from 'react-native';

export default function TextInputTask2() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <View>
            <TextInput
            placeholder='enter your name'
            value={name}
            onChangeText={text=> setName(text)}/>

            <TextInput keyboardType="numeric"
            placeholder='enter your age'
            value={age}
            onChangeText={text=> setAge(text)}/>
            <Text> Hello {name} your age is {age} </Text>
            
            
        </View>
    );
}