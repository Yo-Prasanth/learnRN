import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import ProjectsTile from './molecules/ProjectsTile';

export default function Projects() {
  return (
    <View>
      <SectionTitle title={'Recent Projects'} />
      <ProjectsTile />
      <ProjectsTile />
      <ProjectsTile />
      <ProjectsTile />
    </View>
  );
}

const styles = StyleSheet.create({});
