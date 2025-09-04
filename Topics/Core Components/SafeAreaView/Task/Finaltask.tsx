import React, {useState} from 'react';
import {Text, TextInput, View, SafeAreaView, ScrollView} from 'react-native';

export default function FinalTaskSafeAreaView() {
    const [name, setName] = useState<string>("")
    const [hobby, setHobby] = useState<string>("")
    const [hobbies, setHobbies] = useState<string[]>([]);

    return (
        <SafeAreaView>
            <View>
                <TextInput
                placeholder='Type your name'
                value={name}
                onChangeText={text => setName(text)}/>
                <Text> Hello {name} </Text>
                
            </View>

            <View>
                <TextInput
                placeholder='type your hobby: '
                value={hobby}
                onChangeText={setHobby}
                onSubmitEditing={() => {
                    if(hobby.trim() !== "") {
                    setHobbies([...hobbies, hobby.trim()])
                    setHobby("");
                }}}/>

            </View>

            {name !== "" && hobbies.length >0 && (
                <Text> Hello {name} your favorite hobbies are: </Text>
            )}
           

            <ScrollView> 

            {hobbies.map((hobby,index) => (
                <Text key={index}>
                    {index + 1} - {hobby}
                </Text>
            ))}
            </ScrollView> 
                
        </SafeAreaView>
    );
}