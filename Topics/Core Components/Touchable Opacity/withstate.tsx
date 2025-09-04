import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';

export default function WithStateTouchableOpacity() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <Text> You press {count} times </Text>

            <TouchableOpacity
            onPress={() => 
                setCount(count + 1)}>
                <Text> Press me </Text>
            
                </TouchableOpacity>

            
        </View>
    )
}