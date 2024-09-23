import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthRatio } from '../constants/dimentions';




const Details = ({route}) =>{

    console.log(widthRatio,"widthRatio")

    const movieData = route.params;


    console.log(movieData.movieDetails)


    return(<View style={{backgroundColor:"yellow",flex:1, padding:15}}>
    

        <Text style={style.title}>{movieData.movieDetails.title}</Text>
        <Text style={{color:"blue", textAlign:"center"}}>{movieData.movieDetails.year}</Text>

        <Text style={style.link}>{movieData.movieDetails.poster_url}</Text>
        <Text style={style.others}>{"Director"}-{movieData.movieDetails.director}</Text>
        <Text style={style.others}>{"Writers"}-{movieData.movieDetails.writers}</Text>
        <Text style={style.others}>{"Stars"}-{movieData.movieDetails.stars}</Text>


        

    </View>)
}

export default Details;

const style = StyleSheet.create({
    title :{
        color:"red",
        textAlign:"center", 
        fontSize:25, 
        fontFamily:"Epilogue-SemiBold",
        textDecorationColor:"underline" 
    },
    link:{
        fontSize:10,
        color:"green",
        padding:10

    },
    others: {
        fontSize:15,
        color:"black", 

    }


});