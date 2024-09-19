// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import IntroCard from '../components/IntroCard';
import TweetPage from './TweetPage';


const HomePage = () => {

    function onPress(event: GestureResponderEvent): void {
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
                    <TouchableOpacity style={{height:30, width:30, backgroundColor:"#d3d3d3", borderRadius:5}}></TouchableOpacity>
                    <TouchableOpacity style={{height:30, width:30, backgroundColor:"#d3d3d3", borderRadius:5}}></TouchableOpacity>
                    <TouchableOpacity style={{height:30, width:30, backgroundColor:"#d3d3d3", borderRadius:5}}></TouchableOpacity>

                </View>
                <View style={{flex:5, backgroundColor:"white", padding:5}}>
                    <Text style={{color:"black", fontSize:20}}>Recent Projects & Movies</Text>
                    <View style={{height:"70%",justifyContent:"space-around"}}>
                    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:"20%"}}>
                        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
                            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5}}>
                            </View>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Kannappa</Text>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:"20%"}}>
                        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
                            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5}}>
                            </View>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Star</Text>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:"20%"}}>
                        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
                            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5}}>
                            </View>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Om Bheem Bush</Text>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#d3d3d3", borderRadius:5, flexDirection:"row",height:"20%"}}>
                        <View style={{alignItems:"center", justifyContent:"center", paddingStart:10}}>
                            <View style={{height:30, width:30, backgroundColor:"white", borderRadius:5}}>
                            </View>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>Maine Pyar Kiya</Text>
                            <Text style={{color:"black", fontSize:15, paddingStart:20}}>2024</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                </View>

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

