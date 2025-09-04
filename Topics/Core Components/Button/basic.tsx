import React from 'react';
import {Button, Text, View, Alert} from 'react-native';

export default function BasicButton() {
    return (
        <View>
            <Text> This is the button syntax</Text>
            <Button
            title='Click me senpai'
            onPress={() => Alert.alert("button pressed")}/>
        </View>
    )
}