import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


const IntroCard = () => {

    return <View style={{  flexDirection: "row"  }}>
                    <View style={{ flex: 2, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
                        <Image
                            source={{ uri: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fpeople%2F448193a532ff75054db24713f8f2be2d.jpg" }}
                            style={{ height: 140, width: 140, borderWidth:3, borderRadius:20,}} />
                    </View>


                    <View style={{ flex: 3, backgroundColor: "pink", padding: 5, borderRadius:10 }}>

                        <View>
                        <Text style={{ fontSize: 20, color:"black" }}>Preity Mukhundhan</Text>

                        </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",backgroundColor:"green",height:40,alignItems:"center"}}>
                                <Text style={{fontSize:8, color:"black",flexGrow:1}}>Indian Actress and Model</Text>
                                <View style={{flexDirection:"row",backgroundColor:"red",width:40,alignItems:"center"}}>
                                    <Text style={{fontSize:10, color:"blue",flexGrow:1}}>Bioo</Text>
                                    <View style={{width:5, height:5, backgroundColor:"yellow"}}>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent:"space-around"}}>
                            <View style={{flexDirection:"row", justifyContent:"space-between", padding:1, alignItems:"center"}}>
                                <View style={{justifyContent:"center", width:"30%", height:"100%"}}>
                                    <View style={{backgroundColor:"gray", borderRadius:10, height:"80%", justifyContent:"center"}}>
                                    <Text style={{ fontSize: 30, color: "black", textAlign:"center"}}>23</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, color: "black", textAlign:"center" }}>Years</Text>

                                </View>
                                <View style={{justifyContent:"center", borderRadius:10, width:"30%", height:"100%"}}>
                                    <View style={{backgroundColor:"gray", borderRadius:10, height:"80%", justifyContent:"center"}}>
                                    <Text style={{ fontSize: 30, color: "black", textAlign:"center" }}>8</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, color: "black", textAlign:"center" }}>Months</Text>
                                </View>
                                <View style={{justifyContent:"center", borderRadius:10, width:"30%", height:"100%"}}>
                                    <View style={{backgroundColor:"gray", borderRadius:10, height:"80%", justifyContent:"center"}}>
                                    <Text style={{ fontSize: 30, color: "black", textAlign:"center" }}>10</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, color: "black", textAlign:"center" }}>Days</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                   
            </View>
}

export default IntroCard;
