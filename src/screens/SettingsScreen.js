import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SettingsListButton from '../components/SettingsListButton';
import {connect} from 'react-redux';

// const {backgroundColor, color} = theme;
const SettingsScreen = ({theme, navigation}) => {
  const {backgroundColor, color} = theme;
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <SettingsListButton
        title="Change the theme"
        //onPress={() => toggle()}
        onPress={() => navigation.navigate('ThemesSetting')}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {theme} = state.theme1;
  console.log('************************123123132*****', theme);
  return {theme};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(SettingsScreen);
