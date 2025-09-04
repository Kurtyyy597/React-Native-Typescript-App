import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function ButtonwithState() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <Text> Count : {count}</Text>
            <Button
            title='Increase Count'
            onPress={() => setCount(count + 1)}/>

            <Button
            title="Decrease Count"
            onPress={() => setCount(count - 1)}/>
            
        </View>
    );
}