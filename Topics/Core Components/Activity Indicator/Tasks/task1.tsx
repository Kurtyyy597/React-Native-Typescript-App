import React, {useState} from 'react';
import {ActivityIndicator, Text, View, Button } from 'react-native';

export default function ActivityIndicatorTask1() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <View>
            {loading ? (
                <ActivityIndicator size={"large"} color={"blue"}/>
            ) : (
                <Text> Done! </Text>
            )}

            <Button 
            title='Toggle Loading'
            onPress={() => setLoading(!loading)}/>

            

        </View>
    )
}