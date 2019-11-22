import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import TabScreen from '../TabsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ThemeSettingScreen from './screens/ThemeSettingScreen';
import DetailsScreen from './screens/DetailsScreen';
import LaunchScreen from './screens/LaunchScreen';

const navigator = createStackNavigator(
  {
    Launch: {
      screen: LaunchScreen,
      navigationOptions: {
        header: null,
      },
    },
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
  },
  {
    defaultNavigationOptions: ({screenProps}) => {
      let currentTheme = screenProps.theme;
      console.log('Curent', currentTheme);
      return {
        headerTintColor: currentTheme.color,
        headerStyle: {
          backgroundColor: currentTheme.backgroundColor,
        },
      };
    },
  },
);

const RootNavigator = createAppContainer(navigator);

export default RootNavigator;
