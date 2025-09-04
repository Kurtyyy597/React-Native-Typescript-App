import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function ActivityIndicatorTask2() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (

    <View>
        {loading ? (
            <ActivityIndicator size={"large"} color={"red"}/>
        ) : (
            <Text> Finished loading! </Text>
        )}
        
    </View>
    );
}
  