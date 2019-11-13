import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {loadCategory} from '../actions/dataActions';

const TechnologyScreen = ({
  technology,
  isLoading,
  error,
  loadCategory,
  navigation,
}) => {
  useEffect(() => {
    loadCategory('technology');
  }, []);

  console.log('************', technology);
  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <FlatList
            style={{width: '100%'}}
            data={technology}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Details', {url1: item.url})
                  }>
                  <View style={styles.rowStyles}>
                    <View style={styles.imgContainer}>
                      <Image
                        source={{
                          uri:
                            item.urlToImage === null
                              ? defaultImage
                              : item.urlToImage,
                        }}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.rightSide}>
                      <Text style={styles.headline}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

const mapStateToProps = ({category}) => {
  const {technology, isLoading, error} = category;
  return {technology, isLoading, error};
};

const styles = {
  container: {
    flex: 1,
    padding: 8,
  },
  rowStyles: {
    flexDirection: 'row',
    borderRadius: 7,
    //backgroundColor: '#dfe4ea',
    backgroundColor: '#EFBB91',
    padding: 5,
    margin: 5,
  },
  imgContainer: {
    margin: 3,
    height: 80,
    width: Dimensions.get('window').width / 3 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  rightSide: {
    flex: 2,
    paddingLeft: 10,
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 8,
  },
  headline: {
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  avtarCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
  },
};

export default connect(mapStateToProps, {loadCategory})(TechnologyScreen);
