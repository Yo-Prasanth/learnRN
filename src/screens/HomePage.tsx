// HomeScreen.js
import React from 'react';
import {ScrollView} from 'react-native';
import IntroCard from '../components/IntroCard';
import Projects from '../components/Projects';
import RecentTweet from '../components/RecentTweet';
import SocialMediaHandles from '../components/SocialMediaHandles';

const HomePage = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 20}}>
      <IntroCard />
      <RecentTweet />
      <SocialMediaHandles />
      <Projects />
    </ScrollView>
  );
};

export default HomePage;
