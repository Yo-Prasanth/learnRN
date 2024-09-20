import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SectionTitle from '../atoms/SectionTitle';

export default function TodayQuote({tweet_text}) {
  return (
    <View>
      <SectionTitle title={'Quote of the day'} />
      <View style={styles.container}>
        <Text style={styles.tweet_text}>{tweet_text}</Text>
      </View>
      <Image
        source={require('../../assets/icons/share.png')}
        style={{
          height: 20,
          width: 20,
          position: 'absolute',
          bottom: 12,
          right: 12,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#fff',
    elevation: 1,
  },
  tweet_text: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: 'Epilogue-Medium',
    color: '#000',
  },
});
