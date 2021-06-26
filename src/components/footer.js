import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {windowWidth} from '../styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subMenuStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.subMenuStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    alignSelf: 'center',
    width: windowWidth,
    height: 60,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subMenuStyle: {flex: 1, alignItems: 'center'},
  imageStyle: {height: 40, width: 40},
});

export default Footer;
