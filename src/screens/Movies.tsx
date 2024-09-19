import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity,Linking, GestureResponderEvent, ScrollView } from 'react-native';


const Movies = () => {

    return <View style={{flex:5, backgroundColor:"white", padding:5}}>
    <Text style={{color:"black", fontSize:20}}>Recent Projects & Movies</Text>
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
    <View style={{height:400,justifyContent:"space-between"}}>
    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:50}}>
        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5, justifyContent:"center", alignItems:"center"}}>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Kannappa_film_poster.jpg/220px-Kannappa_film_poster.jpg" }} style={{ width: 40, height: 40, borderRadius:5, borderColor:"yellow", borderWidth:1 }} />
            </View>
        </View>
        <View style={{justifyContent:"center", flex:1}}>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Kannappa</Text>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:50}}>
        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5, justifyContent:"center", alignItems:"center"}}>
            <Image source={{ uri: "https://m.media-amazon.com/images/M/MV5BZDFlYmRkOGItYTA0MC00ZjA0LWE2NTQtZjc3MTViZGFhZDNkXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg" }} style={{ width: 40, height: 40, borderRadius:5, borderColor:"yellow", borderWidth:1 }} />
            
            </View>
        </View>
        <View style={{justifyContent:"center", flex:1}}>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Star</Text>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:50}}>
        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5, justifyContent:"center", alignItems:"center"}}>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/9/97/Om_Bheem_Bush_poster.jpg" }} style={{ width: 40, height: 40, borderRadius:5, borderColor:"yellow", borderWidth:1 }} />

            </View>
        </View>
        <View style={{justifyContent:"center", flex:1}}>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Om Bheem Bush</Text>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:50}}>
        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5, justifyContent:"center", alignItems:"center"}}>
            <Image source={{ uri: "https://english.mathrubhumi.com/image/contentid/policy:1.9861045:1725116320/WhatsApp%20Image%202024-08-31%20at%2018.54.49.jpeg?$p=0046607&f=4x3&w=1080&q=0.8" }} style={{ width: 40, height: 40, borderRadius:5, borderColor:"yellow", borderWidth:1 }} />

            </View>
        </View>
        <View style={{justifyContent:"center", flex:1}}>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Maine Pyar Kiya</Text>
            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
        </View>
    </TouchableOpacity>
    </View>
    </ScrollView>

</View>
    
}
export default Movies;
