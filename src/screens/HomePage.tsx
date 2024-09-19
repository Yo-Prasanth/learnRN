// HomeScreen.js
import React from 'react';
import {ScrollView, View} from 'react-native';
import IntroCard from '../components/IntroCard';
import Projects from '../components/Projects';
import RecentTweet from '../components/RecentTweet';
import SocialMediaHandles from '../components/SocialMediaHandles';

const tweet_text =
  "Let's the countdown begins! I am a beyound excited for the new movie coming out soon. Get ready to be amazed";

const HomePage = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: '#F3F4F6',
        paddingTop: 48,
        paddingHorizontal: 8,
      }}>
      <IntroCard />
      <View style={{height: 24}} />
      <View style={{paddingHorizontal: 8}}>
        <RecentTweet tweet_text={tweet_text} />
        <View style={{height: 24}} />
        <SocialMediaHandles />
        <View style={{height: 24}} />
        <Projects />
      </View>
    </ScrollView>
  );
};

export default HomePage;
