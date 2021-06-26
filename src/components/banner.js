import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {windowWidth} from '../styles';

const Banner = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: windowWidth - 48,
    height: 200,
  },
});

export default Banner;
