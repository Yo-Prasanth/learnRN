// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity,Linking, GestureResponderEvent, ScrollView } from 'react-native';
import IntroCard from '../components/IntroCard';
import TweetPage from './TweetPage';
import Movies from './Movies';


const HomePage = () => {

    function onPress(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

    function openLink(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return <View style={{ flex: 1, backgroundColor: "white",padding:5 }}>
        <IntroCard/>
        <TweetPage/>
        <View style={{ flex: 3, backgroundColor: "gray", borderRadius:20 }}> 
            <View style={{ flex: 5, justifyContent:"center" }}>
                <View style={{flex:1, backgroundColor:"white", padding:5, justifyContent:"space-around", alignItems:"center", flexDirection:"row" }}>
                    <View>
                        <Text style={{color:"black", fontSize:22}}>Follow me on </Text>
                    </View>
                    <TouchableOpacity style={{height:35, width:35, backgroundColor:"#d3d3d3", borderRadius:20, justifyContent:"center", alignItems:"center"}} onPress={() => openLink("https://www.instagram.com/preity_mukhundhan/?hl=en")}>
                        <Image source={{ uri: "https://cdn.logojoy.com/wp-content/uploads/20230922110325/facebook-2021-logo-600x319.png" }} style={{ width: 35, height: 35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:35, width:35, backgroundColor:"#d3d3d3", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGJwVJu8g0bYatTrufrElEabb6-SaXDUXMA&s" }} style={{ width: 45, height: 45 }} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{height:35, width:35, backgroundColor:"#d3d3d3", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                        <Image source={{ uri: "https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png" }} style={{ width: 45, height: 45 }} />

                    </TouchableOpacity>

            </View>
            <Movies/>
            

            </View>
        </View>
    </View>
}

export default HomePage;














// HomeScreen.js
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';


// const HomePage = () => {

//     return <View style={{flex:1,backgroundColor:"red"}}/>


// }

// export default HomePage;

