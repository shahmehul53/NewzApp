import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TechnologyScreen from './src/screens/TechnologyScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import SportsScreen from './src/screens/SportsScreen';
import HealthScreen from './src/screens/HealthScreen';
import BusinessScreen from './src/screens/BusinessScreen';
import EntertainmentScreen from './src/screens/EntertainmentScreen';
import GeneralScreen from './src/screens/GeneralScreen';

const TabScreen = createMaterialTopTabNavigator(
  {
    Technology: TechnologyScreen,
    Science: ScienceScreen,
    Health: HealthScreen,
    Sports: SportsScreen,
    Entertainment: EntertainmentScreen,
    Business: BusinessScreen,
    General: GeneralScreen,
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,

    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);

export default TabScreen;
