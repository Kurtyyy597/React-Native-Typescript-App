import React from 'react';
import {Button, View, TouchableOpacity, Text, Alert} from 'react-native';

export default function BasicTouchableOpacity() {

    const handlePress = () => {
        Alert.alert("TouchableOpacity Pressed");
        
    };

    return (
        <View>
            <TouchableOpacity 
            onPress={handlePress}>
                <Text> Press me</Text>/
            </TouchableOpacity>

        </View>
    );

}