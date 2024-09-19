import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import ProjectsTile from './molecules/ProjectsTile';
import {projects} from '../constants/project_data';

export default function Projects() {
  return (
    <View>
      <SectionTitle title={'Recent Projects'} />
      {projects.map((movie, index) => (
        <ProjectsTile key={index} movie={movie} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
