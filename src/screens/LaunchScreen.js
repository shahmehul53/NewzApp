import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';

const LaunchScreen = ({theme, navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });

  const {backgroundColor, color} = theme;
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {/* <View> */}
      <Text style={{fontSize: 80, fontWeight: 'bold', color: color}}>
        neoNewz
      </Text>
      <ActivityIndicator size="large" color={color} style={{paddingTop: 20}} />
    </View>
  );
};

const mapStateToProps = ({theme1}) => {
  const {theme} = theme1;
  console.log('launchtheme', theme);
  return {theme};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    //backgroundColor: R.color.backgroundColorDefault
    // backgroundColor: '#6a5acd',
  },
  title: {
    fontSize: 25,
    //fontWeight: 'bold',
    color: 'white',
  },
});

export default connect(mapStateToProps)(LaunchScreen);
