/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const movies = ['Kannappa', 'Maine Pyar Kiya', 'Star', 'Om Bheem Bush'];
  const moviesg = [{moviename:"kannapa",hero:"Vishnu, ManchuMohanlal, Prabhas",poster:""},{}];


  const urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_nlzktnlzrvA7iEr75cgyMNpq6jZydEpeg&sF",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzVSdRKFZJ-jEt4DVCLLLZoh2c7cLu6yOMNbPP7w6RJsZ-kfFl",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqT23AMUA9QlQEdajOM-q16FsJpoCttFnh88X9hWwEzBRTodVyxl_ZB6-qcQp1_xEQI6M&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrtfy8mx2unHXUeA42TzoyDJ7ViR1VpWOQUjVfyDaI3b9JbZDO2qCbf7ybi46ZnGrSX8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_Inxxp4-JWz8-5HRu2IbfLVfUPTndDO0PQ&s",
    "https://img-mm.manoramaonline.com/content/dam/mm/mo/web-stories/movies/images/2024/5/22/preity-mukhundhan-3.jpg",
    "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fpeople%2F448193a532ff75054db24713f8f2be2d.jpg",
    "https://i.pinimg.com/736x/05/cb/ec/05cbec225e937f16155b756750067c45.jpg",
    "https://img-mm.manoramaonline.com/content/dam/mm/mo/web-stories/movies/images/2024/5/22/preity-mukhundhan-2.jpg",
    "https://img-mm.manoramaonline.com/content/dam/mm/mo/web-stories/movies/images/2024/5/22/preity-mukhundhan-8.jpg",
    "https://static.toiimg.com/photo/110466911/110466911.jpg",
    "https://i.pinimg.com/564x/fb/4b/7c/fb4b7c7f2d699de1603280b639b799dc.jpg",
    "https://static.toiimg.com/thumb/111341057/111341057.jpg?height=746&width=420&resizemode=76&imgsize=38954",
    "https://static.toiimg.com/thumb/msid-111341073,imgsize-74548,width-900,height-1200,resizemode-6/111341073.jpg",
    "https://pbs.twimg.com/tweet_video_thumb/GPyJhMMXIAATm-6.jpg"

  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ height: 300, width: "100%" }}>
          <Image source={{ uri: urls[currentIndex] }}
            style={{ height: "100%", width: "100%", }}
            resizeMode="contain"

          />
        </View>

        <View style={{ height: 30 }} />

        <View>
          <Text style={styles.heading}>Preity Mukhundhan</Text>
          <Text style={styles.paragraph}>Biography: Preity Mukhundhan , an Indian film actress, has left an indelible mark on the Telugu and Tamil movie industry with her remarkable performances. Born and raised in Trichy, Tamil Nadu, Preity ventured into the world of cinema with her debut in the superhit film " Om Bheem Bush " in 2024.</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.heading}>Movie List</Text>

          <View>


            {
              movies.map((movie, index) => {
                return <Text key={index} style={styles.paragraph} onPress={() => navigation.navigate("Details", { name: movie })}>{index + 1}. {movie}</Text>
              })
            }

          </View>
          <View style={{ height: 10 }} />
          <Text style={styles.gallery}>GALLERY</Text>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            urls.map((item, index) =>

              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => setCurrentIndex(index)}>
                <Image source={{ uri: item }}
                  style={{ height: 200, width: 120, borderRadius: 10, borderColor: "yellow", borderWidth: 2 }} key={index}


                />
                <View style={{ width: 10 }} />
              </TouchableOpacity>


            )
          }

        </ScrollView>

        <View>
          <Text>

          </Text>
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1, backgroundColor: "#FFFFF0", alignItems: "center", justifyContent: "center", padding: 20, includeFontPadding: false
  },
  heading: {
    fontFamily: "serif",
    fontSize: 30,
    color: "black", textAlign: "center"
  },
  paragraph: {
    color: "#141821",
    fontSize: 12,
    justifyContent: "space-around",
    textAlign: "justify"
  },
  gallery: {
    fontSize: 20,
    fontFamily: "arial",
    color: "orange"
  }

});

export default App;
