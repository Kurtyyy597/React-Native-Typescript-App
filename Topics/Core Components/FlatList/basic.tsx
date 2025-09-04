import React from 'react';
import {Text, View, FlatList} from 'react-native';

const data = [
    {id: '1', name: "Kurt Allen", section: '41'},
    {id: '2', name: "John Cena", section: '42'},
    {id: '3', name: "Roman Reigns", section: '43'},
    {id: '4', name: "The Rock", section: '44'}
];

export default function BasicFlatList() {
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item}) => <Text> {item.name} : Section {item.section} </Text>}/>
        </View>
    )
}
