import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView,} from 'react-native';

export default function TextInputTask4() {
    const [name, setName] = useState<string>("");
    const [fruit, setFruit] = useState<string>("");
    const [fruits, setFruits] = useState<string[]>([]);

    return (
        <ScrollView>
            <View>
                <TextInput
                placeholder='Enter your name'
                value={name}
                onChangeText={text=> setName(text)}/>
                <Text> Hello I am {name} </Text>
            </View>

            <View>
                <TextInput 
                placeholder='Enter your favorite fruit'
                value={fruit}
                onChangeText={text=>setFruit(text)}
                onSubmitEditing={() => {
                    setFruits([...fruits, fruit]);
                    setFruit("");

                }}/>
                </View>

                {fruits.map((fruit,index) => (
                    <Text key={index}>
                        My Favorite fruits number:
                        {index + 1} - {fruit}
                    </Text>
                ))}
        </ScrollView>
    );
}