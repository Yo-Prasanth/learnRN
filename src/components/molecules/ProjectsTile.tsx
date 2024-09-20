import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProjectsTile({movie}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: movie?.poster_url,
        }}
        style={styles.image}
      />
      <View style={{justifyContent: 'center', marginLeft: 16}}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{height: 4}} />
        <Text style={styles.year}>{movie.year}</Text>
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
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Epilogue-Medium',
  },
  year: {color: 'black', fontFamily: 'Epilogue-Regular'},
});
