import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function ActivityIndicatorTask3 () {
    const [step, setStep] = useState<number>(1);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(2), 3000)
        const timer2 = setTimeout(() => setStep(3), 6000)

        return() => {
            clearTimeout(timer1)
            clearTimeout(timer2);
        };
    }, []);

    return (
        <View>
            {step === 1 && (
                <>
                <ActivityIndicator size={"large"} color={"blue"}/>
                <Text> Loading Data ...</Text>
                </>
            )}

            {step === 2 && (
                    <>
                    <ActivityIndicator size={"large"} color={"red"}/>
                    <Text> Almost Done..... </Text>
                    </>
            )}

            {step === 3 && <Text> Task Doneeeeeee </Text>}
            </View>
    );
}
             

                
                
             
            
   


    
  