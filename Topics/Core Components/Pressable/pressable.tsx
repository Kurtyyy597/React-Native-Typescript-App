import React, {useState} from 'react';
import {Pressable, Text, View,} from 'react-native';

export default function PressableWithState() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <Text> Count: {count} </Text>

            <Pressable
            onPress={() => setCount(count + 1)}>
                <Text> Increase Count </Text>
                
                </Pressable>
        </View>
    );
}
   