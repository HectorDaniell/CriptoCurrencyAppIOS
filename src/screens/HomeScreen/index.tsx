import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Image} from 'react-native';
import Banner from '../../components/banner';
import CardInfoCripto from '../../components/cardInfoCripto';
const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/banner-light.png')} style={styles.banner} imageStyle={styles.bannerImage}>
        <Text style={styles.title}>
          🚀 Bienvenido a Fluyez
        </Text>
        <Banner />
        <CardInfoCripto />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,

  },
  banner: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 100,
  },
  bannerImage: {
    resizeMode:'cover',
    
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom:8,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16, 
    color: '#000000', 
    fontWeight: '300', 
    textAlign: 'center', 
    lineHeight: 24, 
    paddingHorizontal: 24, 
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, elevation: 7,
    marginBottom: 24,
  },
});

export default HomeScreen; 