import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const DetailsScreen = ({navigation}) => {
  const url = navigation.getParam('url1');
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default DetailsScreen;
