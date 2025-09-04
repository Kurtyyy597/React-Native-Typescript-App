import React from 'react';
import {View, Text, SectionList} from 'react-native';

export default function SectionListBasic() {
    const DATA = [
        {title: "Animals", data: ["Dog", "Lion", "Wolf", "Tiger"]},
        {title: "Cars", data:["Raptor", "Honda", "Mitsubishi", "Ferrari"]}
    ];

    return (
        <View>
            <SectionList
            sections={DATA}
            keyExtractor={(item,index) => item + index}
            renderItem={({item}) => <Text> Data: {item} </Text>}
            renderSectionHeader={({section}) => (
                <Text> Title: {section.title} </Text>
            )}/>
            </View>
    );
}
            

        