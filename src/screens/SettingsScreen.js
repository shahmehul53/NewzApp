import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SettingsListButton from '../components/SettingsListButton';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <SettingsListButton
        title="Change the theme"
        //onPress={() => toggle()}
        onPress={() => navigation.navigate('ThemeSetting')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
