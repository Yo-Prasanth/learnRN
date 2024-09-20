import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProjectsTile({movie}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', {movieDetails: movie})}>
      <Image
        source={{
          uri: movie?.poster_url,
        }}
        style={styles.image}
      />
      <View style={{justifyContent: 'center', marginLeft: 16, flexShrink: 1}}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{height: 4}} />
        <Text style={styles.year}>{movie.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  image: {
    width: 72,
    height: 72,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#000',
  },

  title: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'TT Norms Pro Medium',
    flexShrink: 1,
    marginBottom: 4,
  },
  year: {
    color: 'black',
    fontFamily: 'TT Norms Pro Regular',
    flexShrink: 1,
    fontSize: 15,
  },
});
