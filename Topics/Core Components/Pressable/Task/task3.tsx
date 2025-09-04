import React, {useState} from 'react';
import {Pressable, Text, View, TextInput, ScrollView} from 'react-native';

export default function PressableTask3() {
    const [name, setName] = useState<string>("");
    const [fruit, setFruit] = useState<string>("");
    const [fruits, setFruits] = useState<string[]>([]);

    return (
        <ScrollView> 
        <View>
            <TextInput
            placeholder='Type your name'
            value={name}
            onChangeText={setName}/>

            <TextInput
            placeholder='Type your favorite fruits'
            value={fruit}
            onChangeText={setFruit}
            onSubmitEditing={() => {
                setFruits([...fruits, fruit]);
                setFruit("");
            }}/>

            {name && fruits.length > 0 && <Text> Hello {name} your favorite fruits are: </Text>}

            <View>
                {fruits.map((fruit,index) => (
                    <Text key={index}>
                        {index + 1} - {fruit}
                    </Text>
                ))}
            </View>


        </View>
        </ScrollView>
    )
}