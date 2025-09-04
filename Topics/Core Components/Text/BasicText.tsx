import React from 'react';
import { View, Text } from 'react-native';

export default function BasicText() {
    const name = "Kurt Marquez";
    return (
        <View>
            <Text> Hello React Native </Text>
            <Text> Hello {name} </Text>
        </View>
    )
    
}