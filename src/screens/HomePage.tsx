// HomeScreen.js
import React, {useState} from 'react';
import {Platform, ScrollView, StatusBar, View} from 'react-native';
import IntroCard from '../components/IntroCard';
import Projects from '../components/Projects';
import RecentTweet from '../components/RecentTweet';
import RecentVideo from '../components/molecules/RecentVideo';
import TodayQuote from '../components/molecules/TodayQuote';
import SocialMediaHandles from '../components/SocialMediaHandles';

const tweet_text =
  "Let's the countdown begins! I am a beyound excited for the new movie coming out soon. Get ready to be amazed";

const HomePage = () => {
  const [info, setInfo] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: '#F3F4F6',
        paddingTop: Platform.OS === 'android' ? 48 : 96,
        paddingHorizontal: 8,
      }}>
      {/* <StatusBar backgroundColor={'#fff'} /> */}
      <IntroCard setInfo={setInfo} />

      <View style={{paddingHorizontal: 8}}>
        {info && (
          <>
            <View style={{height: 24}} />
            <SocialMediaHandles />
          </>
        )}
        <View style={{height: 24}} />
        <TodayQuote
          tweet_text={
            'Each morning is a new opportunity to build, create, and rise 💪🏽'
          }
        />
        <View style={{height: 24}} />
        <RecentVideo />
        <View style={{height: 24}} />

        <RecentTweet
          tweet_text={'We launched a new bag today, have a look guys'}
        />
        <View style={{height: 24}} />
        <Projects />
      </View>
    </ScrollView>
  );
};

export default HomePage;
