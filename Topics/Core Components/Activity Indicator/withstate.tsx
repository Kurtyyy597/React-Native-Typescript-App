import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from "react-native";

export default function ActivityLoadingWithState() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            {loading ? (
                <ActivityIndicator size={"large"} color={"blue"}/>
            ) : (
                <Text> Data Loaded </Text>
            )}
            </View>
    );
}
        
    

