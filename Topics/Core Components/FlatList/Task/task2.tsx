import React from 'react';
import {Text, View, FlatList, Image } from 'react-native';

const data = [
    {id: '1', name:"Apple",  Image: require('../../../../assets/img/apple.png')},
    {id: '2', name:"Banana", Image: require('../../../../assets/img/banana.png')},
    {id: '3', name:"Grapes", Image: require('../../../../assets/img/grapes.png')},
];

export default function FlatListTask2() {
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item})=> <View>
                <Image source={item.Image} style={{width:100, height:100}}/>
                <Text> {item.name} </Text>
                
            </View> }/>
        
        </View>
    );
}