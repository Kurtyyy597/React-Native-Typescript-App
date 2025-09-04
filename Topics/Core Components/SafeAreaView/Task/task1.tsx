import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function SafeAreaViewTask1() {
    const name="SafeAreaView"
    return (
        <SafeAreaView>
            <View> 
            <Text>  Welcome to {name}</Text>
            </View>

            <View>
                <Text> This is my first SafeAreaView example! </Text>
            </View>
        </SafeAreaView>
    )
}