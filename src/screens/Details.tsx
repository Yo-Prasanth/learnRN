import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthRatio } from '../constants/dimentions';




const Details = ({route}) =>{

    console.log(widthRatio,"widthRatio")

    const jkjjkj = route.params;


    console.log(jkjjkj.movieDetails)


    return(<View style={{backgroundColor:"brown",flex:1}}>

        <Text>{jkjjkj.movieDetails.title}</Text>
    </View>)
}


export default Details;