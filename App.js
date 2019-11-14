import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import DetailsScreen from './src/screens/DetailsScreen';
import TabScreen from './TabsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ThemeSettingScreen from './src/screens/ThemeSettingScreen';

const navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Tab: TabScreen,
  Settings: SettingsScreen,
  ThemesSetting: ThemeSettingScreen,

  Details: DetailsScreen,
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
