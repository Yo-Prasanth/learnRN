import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';




const Details = ({route}) =>{

    const data = route.params;


    console.log(data)


    return(<View style={{backgroundColor:"brown",flex:1}}>
        <Text>{data?.name}</Text>
    </View>)
}


export default Details;