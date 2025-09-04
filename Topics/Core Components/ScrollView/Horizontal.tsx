import React from 'react';
import {Text, ScrollView} from 'react-native';

export default function HorizontalScrollView() {
    return (
        <ScrollView horizontal={true}>
            <Text> Line 1 </Text>
            <Text> Line 2 </Text>
            <Text> Line 3 </Text>
            <Text> Line 4 </Text>
            <Text> Line 5 </Text>

            
        </ScrollView>
    );
}