import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';

export default function RecentTweet() {
  return (
    <View>
      <SectionTitle title={'Recent Tweet'} />
      <View style={styles.container}>
        <Text style={styles.tweet_text}>
          Let's the countdown begins! I am a beyound excited for the new movie
          coming out soon. Get ready to be amazed
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tweet_text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    // fontStyle: 'italic',
  },
});
