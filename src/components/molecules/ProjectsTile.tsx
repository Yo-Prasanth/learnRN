import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProjectsTile() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BZDFlYmRkOGItYTA0MC00ZjA0LWE2NTQtZjc3MTViZGFhZDNkXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg',
        }}
        style={styles.image}
      />
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.title}>Star</Text>
        <Text style={styles.year}>2024</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 12,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderColor: 'yellow',
    borderWidth: 1,
  },

  title: {
    color: 'black',
    fontSize: 15,
    paddingStart: 20,
  },
  year: {color: 'black', fontSize: 15, paddingStart: 20},
});
