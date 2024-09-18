import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const TweetPage = () => {

    return (<View style={{ flex: 1, backgroundColor: "white", padding:5 }}>
        <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 20, color:"black", paddingTop:5 }}>Recent Tweet</Text>
        </View>
        <View style={{ flex: 5, backgroundColor: "gray", borderRadius:10, justifyContent:"center"  }}>
            <Text style={{ fontSize: 15, padding: 10, color:"white",textAlign:"right", fontStyle:"italic", }}>Let's the countdown begins! I ama beyound excited for the new movie coming out soon. Get ready to be amazed</Text>
        </View>
    </View>)
}
export default TweetPage;

