import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {themeColor} from '../assets/themes';
import {connect} from 'react-redux';
import {changeTheme} from '../actions/dataActions';

const tempList = [
  {...themeColor.blue, obj: {...themeColor.blue}},
  {...themeColor.rose, obj: {...themeColor.rose}},
  {...themeColor.green, obj: {...themeColor.green}},
  {...themeColor.yellow, obj: {...themeColor.yellow}},
  {...themeColor.violet, obj: {...themeColor.violet}},
  {...themeColor.white, obj: {...themeColor.white}},
];

const ThemeSettingScreen = ({theme, changeTheme}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => changeTheme(item.obj)}>
      <View
        style={[styles.itemContainer, {backgroundColor: item.backgroundColor}]}>
        <Text style={[styles.itemText, {color: item.color}]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  const {backgroundColor, color} = theme;
  return (
    <View style={{backgroundColor: backgroundColor, flex: 1}}>
      <Text style={[styles.headdline, {color: color}]}>Choose Your Theme:</Text>
      <FlatList
        //style={{flex: 1}}
        data={tempList}
        // ListHeaderComponent={
        //   <Text stye={[styles.headdline, {color: color}]}>
        //     Choose Your Theme:
        //   </Text>
        // }
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {theme} = state.theme1;
  return {theme};
};

const styles = {
  headdline: {
    marginTop: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 20,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'bold',
  },
};

export default connect(mapStateToProps, {changeTheme})(ThemeSettingScreen);
