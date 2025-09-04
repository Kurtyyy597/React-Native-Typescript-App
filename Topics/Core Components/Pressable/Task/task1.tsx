import React, {useState} from 'react';
import {Pressable, Text, View,} from 'react-native';

export default function PressableTask1() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <View>
                <Text> Count: {count} </Text>
            </View>
            
            <Pressable
            onPress={() => setCount(count + 1)}>
                <Text> Click me to add </Text>
            </Pressable>

            <Pressable
            onPress={() => setCount(count - 1)}>
                <Text> Click to Decrease </Text>
            </Pressable>

            <Pressable
            onPress={() => setCount(0)}>
                <Text> Reset Button </Text>
            </Pressable>
        </View>
    );
}