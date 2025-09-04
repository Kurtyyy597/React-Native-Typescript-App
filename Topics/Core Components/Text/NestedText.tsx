import React from 'react';
import {View, Text} from "react-native";

export default function NestedText() {
    return (
        <View>
            <View>
                <Text>
                    Hello this is some nested text!
                </Text>
            </View>
        </View>
    )
}