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

const Details = ({route}) => {
  const {poster_url} = route.params.movieDetails;
  const {width} = useWindowDimensions();
  return (
    <View style={{backgroundColor: 'brown', flex: 1}}>
      <Image
        source={{uri: poster_url}}
        style={{height: 300, width}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Details;
