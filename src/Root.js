import React from 'react';
import {connect} from 'react-redux';
import RootNavigator from './Routes';

const Root = ({theme}) => {
  console.log('theme', theme);
  return <RootNavigator screenProps={{theme}} />;
};

const mapStateToProps = state => {
  const {theme} = state.theme1;
  console.log('************************Rooot*****', theme);
  return {theme};
};

export default connect(mapStateToProps)(Root);
