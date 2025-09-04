import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export default function ActivityIndicatorTask6() {
    const [loading, setLoading] = useState<number>(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setLoading(1), 1000)
        const timer2 = setTimeout(() => setLoading(2), 2000)
        const timer3 = setTimeout(() => setLoading(3), 3000)
        const timer4 = setTimeout(() => setLoading(4), 4000)
        const timer5 = setTimeout(() => setLoading(5), 5000)

        return() => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(timer4)
            clearTimeout(timer5)
        };
    }, []);

    return (
        <View>
            {loading === 1 && (
                <>
                <ActivityIndicator size={"large"} color={"blue"}/>
                <Text> Loading. </Text>
                </>
            )}

            {loading === 2 && (
                <>
                <ActivityIndicator size={"large"} color={"blue"}/>
                <Text> Loading.. </Text>
                </>
            )}

            {loading === 3 && (
                <>
                <ActivityIndicator size={"large"} color={"blue"}/>
                <Text> Loading...</Text>
                </>
            )}

            {loading === 4 && (
                <>
                <ActivityIndicator size={"large"} color={"blue"}/>
                <Text> Loading. </Text>
                </>
            )}

            {loading === 5 && <Text> Already Doneeeeee </Text>}
        </View>
    );
}

   