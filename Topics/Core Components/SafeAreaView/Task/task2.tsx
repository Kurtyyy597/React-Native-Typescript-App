import React, {useState} from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';

export default function Task2SafeAreaView() {
    const [name, setName] = useState<string>("");

    return (
        <SafeAreaView>
            <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={text => setName(text)}/>
            <Text> Hello {name} </Text>
            
        </SafeAreaView>
    );
}