import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, CardSection, Header} from '../components/common';
import {connect} from 'react-redux';
import {loadData} from '../actions/dataActions';
import Icon from 'react-native-vector-icons/Feather';
import R from '../R';
import Carousel from 'react-native-snap-carousel';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Technology',
    headline:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    imgSource: R.images.TopFlower,
    color: '#F96A36',
    uri: R.images.Technology,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Entertainment',
    headline:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    imgSource: R.images.TopBusiness,
    color: '#8E96FD',
    uri: R.images.Entertainment,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'General',
    headline:
      'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.',
    imgSource: R.images.TopFlower,
    color: '#FDC06B',
    uri: R.images.General,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Health',
    headlines:
      'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
    imgSource: R.images.TopJuice,
    color: '#3FC98E',
    uri: R.images.Health,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Science',
    headline:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    imgSource: R.images.TopFlower,
    color: '#F13379',
    uri: R.images.Science,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sports',
    headlines: '1st Test: India favourites to make short work of Bangladesh',
    color: '#EFBB91',
    imgSource: R.images.TopJuice,
    uri: R.images.Sports,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Business',
    headline: '1st Test: India favourites to make short work of Bangladesh',
    imgSource: R.images.TopBusiness,
    color: '#28A4BA',
    uri: R.images.Business,
  },
];

const HomeScreen = ({datastore, isLoading, loadData, error, navigation}) => {
  useEffect(() => {
    loadData();
  }, []);

  let defaultImage =
    'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';

  return (
    // <SafeAreaView>
    <View style={{flex: 1, marginLeft: 5, marginRight: 5, marginTop: 20}}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>Sunday</Text>
            <Text>September 22</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon name="settings" size={30} style={{marginRight: 10}} />
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
          }}>
          Top Categories
        </Text>
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
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

        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                marginTop: 10,
                paddingLeft: 6,
              }}>
              Latest News
            </Text>

            <FlatList
              style={{width: '100%'}}
              data={datastore}
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
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({data2}) => {
  const {datastore, isLoading, error} = data2;
  return {datastore, isLoading, error};
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

export default connect(mapStateToProps, {loadData})(HomeScreen);
