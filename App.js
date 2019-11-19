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
import {connect} from 'react-redux';
import Root from './src/Root';

// const navigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     Tab: TabScreen,
//     Settings: SettingsScreen,
//     ThemesSetting: ThemeSettingScreen,

//     Details: DetailsScreen,
//   },
//   {
//     defaultNavigationOptions: ({screenProps}) => {
//       let currentTheme = screenProps.theme;
//       return {
//         headerTintColor: currentTheme.color,
//         headerStyle: {
//           backgroundColor: currentTheme.backgroundColor,
//         },
//       };
//     },
//   },
// );

// const RootNavigator = createAppContainer(navigator);

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
