import React, {useState} from 'react';
import {Text, ScrollView, View, TextInput} from 'react-native';

export default function TextInputTask3() {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState("");
    const [note, setNote] = useState<string>("");

    return (
        <ScrollView>
            <View> 
            <TextInput
            placeholder='enter your name'
            value={name}
            onChangeText={text => setName(text)}/>
            </View>

            <View> 
                <TextInput keyboardType="numeric"
                placeholder='enter your age'
                value={age}
                onChangeText={text => setAge(text)}/>
            </View>

            <View>
                <TextInput
                placeholder='enter your favorite note'
                value={note}
                onChangeText={text => setNote(text)}/>
            </View>

            

            <View>
                <Text> Hello I am {name} I'm {age} year's old. My favorite notes are {note} </Text>
            </View>
            
        </ScrollView>
    );
}
