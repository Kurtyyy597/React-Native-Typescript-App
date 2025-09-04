import React from 'react';
import {Text, FlatList, View} from 'react-native';

const data = [
    {id: '1', name:"Apple"},
    {id: '2', name:"Banana"},
    {id: '3', name:"Grapes"},
    {id: '4', name:"Orange"},
    {id: '5', name:"Pineapple"},
];

export default function FlatListTask1() {
    return (
    <View> 
        <FlatList
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item}) => <Text> {item.name} </Text>}/>
    </View>
    )
}
    
