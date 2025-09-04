import React,{useState,} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';

export default function ActivityIndicatorTask4() {
    const [loading ,setLoading] = useState<boolean>(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 4000)
    };

    return (
        <View>
            {loading ?  (
                <ActivityIndicator size={"large"} color={"blue"}/>
            ) : <Text> Finished</Text>}

            <Button
            title='Click me'
            onPress={startLoading}/>
            </View>
    );
}

            
                 
  