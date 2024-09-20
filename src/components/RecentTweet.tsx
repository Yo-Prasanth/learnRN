import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';

export default function RecentTweet({tweet_text}) {
  return (
    <View>
      <SectionTitle title={'Recent Tweet'} />
      <View style={styles.container}>
        <Text style={styles.tweet_text}>{tweet_text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    elevation: 1,
  },
  tweet_text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color:"gray"
  },
});
