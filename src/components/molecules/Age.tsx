import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from '../../screens/HomePage';

const Age = () => {
return <View style={{ flex: 1, justifyContent:"space-around"}}>
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
}
export default Age;