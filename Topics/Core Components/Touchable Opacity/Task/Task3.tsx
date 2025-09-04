import React, { useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function Task3TouchableOpacity() {
    const [fruit, setFruit] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const checkFruit = () => {
        if (fruit !== "") {
            setMessage(`i like ${fruit} too`)
        } else {
            setMessage("Please enter your favorite fruit")
        }
    };

    return (
        <View>
            <TextInput
            placeholder='Enter your favorite fruit'
            value={fruit}
            onChangeText={text => setFruit(text)}/>

            <TouchableOpacity
            onPress={checkFruit}>
                <Text> Submit </Text>

            </TouchableOpacity>

            {message !== '' && <Text> {message} </Text>}
            
            
            
        </View>
    );
}