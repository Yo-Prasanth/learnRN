
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {widthRatio} from '../constants/dimentions';


const Details = ({route}) =>{

    console.log(widthRatio,"widthRatio")
    const movieData = route.params;
    console.log(movieData.movieDetails)

    return(<View style={{backgroundColor:"#B2BEB5",flex:1, padding:15}}>    

        <Text style={style.title}>{movieData.movieDetails.title}</Text>
        <Text style={{color:"#191970", textAlign:"center"}}>{movieData.movieDetails.year}</Text>
        <View style={{alignItems:"center", padding:10}}>
        <Image
        source={{ uri: movieData.movieDetails.poster_url }}
        style={style.image}
      />
      </View>
        <Text style={style.others}>{"Director"}- {movieData.movieDetails.director}</Text>
        <Text style={style.others}>{"Writers"}- {movieData.movieDetails.writers.join(", ")}</Text>
        <Text style={style.others}>{"Stars"}- {movieData.movieDetails.stars.join(", ")}</Text>
        <Text style={style.others}>{"Producer"}- {movieData.movieDetails.producer}</Text>
        <Text style={style.others}>{"Music"}- {movieData.movieDetails.music}</Text>
        <Text style={style.others}>{"Cinematography"}- {movieData.movieDetails.cinematography}</Text>
        <Text style={style.others}>{"Editing"}- {movieData.movieDetails.editing}</Text>
        <View style={{height:10}}></View>
       <View style={{borderBlockColor:"#023020", borderRadius:5, borderWidth:1, paddingVertical:5}}>
        <Text style={style.discription}>{movieData.movieDetails.description}</Text>
        </View>
    </View>)
}

export default Details;

const style = StyleSheet.create({
    title :{
        color:"#36454F",
        textAlign:"center", 
        fontSize:25, 
        fontFamily:"Epilogue-SemiBold",
        textDecorationColor:"underline" 
    },
    link:{
        fontSize:10,
        color:"#CD5C5C",
        padding:10

    },
    others: {
        fontSize:15,
        color:"black", 

    },
    discription: {
        textAlign:"center",
        color:"#191970"
    },
    image: {
        width:200,
        height:200,
        borderRadius:8
        
    }


});
