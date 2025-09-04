import React, {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';

export default function PressableTask2() {
    const [name, setName] = useState<string>("");
    const [greeting, setGreeting] = useState<string>("");

    return (
        <View>
            <TextInput
                placeholder='Enter your name'
                value={name}
                onChangeText={setName}
            />

            <Pressable
                onPress={() => setGreeting(`Hello, ${name}`)}
            >
                <Text>Greet</Text>
            </Pressable>

            {greeting !== "" && <Text>{greeting}</Text>}
        </View>
    );
}
