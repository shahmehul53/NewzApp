import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {loadData} from '../actions/dataActions';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {DATA, days, months} from '../assets/Constants';

const HomeScreen = ({
  datastore,
  isLoading,
  loadData,
  error,
  navigation,
  theme,
}) => {
  const [date, setDate] = useState();
  useEffect(() => {
    loadData();
    getCurrentDate();
  }, []);

  let defaultImage =
    'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var day = new Date().getDay();
    var month = new Date().getMonth();
    var finalDate = '' + days[day] + '' + '\n' + months[month] + ' ' + date;
    setDate(finalDate);
  };
  const {backgroundColor, color} = theme;

  const renderComponent = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <View style={{marginLeft: 5}}>
            <Text style={{fontWeight: 'bold', color: color}}>{date}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon
                name="settings"
                size={30}
                style={{marginRight: 10, color: color}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Carousel
          data={datastore}
          loop={true}
          autoplay={true}
          renderItem={({item}) => {
            return (
              <ImageBackground
                imageStyle={{borderRadius: 10}}
                style={{height: 300, width: 200, margin: 10}}
                source={{
                  uri:
                    item.urlToImage === null ? defaultImage : item.urlToImage,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    bottom: 5,
                    padding: 5,
                  }}>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: 'bold',
                        flexWrap: 'wrap',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            );
          }}
          sliderWidth={400}
          itemWidth={200}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            marginTop: 10,
            paddingLeft: 6,
            color: color,
          }}>
          Top Categories
        </Text>
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={item => item.title.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
                <View
                  style={{
                    flex: 1,
                    margin: 5,
                    padding: 5,
                  }}>
                  <View
                    style={{
                      height: 150,
                      width: 130,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 10,
                      backgroundColor: item.color,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }}>
                      <Image
                        style={{height: 75, width: 75}}
                        source={item.uri}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 10,
              paddingLeft: 6,
              color: color,
            }}>
            Latest News
          </Text>
        </>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: backgroundColor,
      }}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={color} />
        </View>
      ) : (
        <>
          <FlatList
            style={{width: '100%'}}
            data={datastore}
            ListHeaderComponent={renderComponent()}
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
        </>
      )}
    </View>
  );
};

const mapStateToProps = ({theme1, data2}) => {
  const {datastore, isLoading, error} = data2;
  const {theme} = theme1;
  console.log('adka;sdaksd', theme);
  return {datastore, isLoading, error, theme};
};

const styles = {
  container: {
    flex: 1,
    padding: 8,
  },
  rowStyles: {
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: '#F9C64E',
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

export default connect(mapStateToProps, {loadData})(HomeScreen);
