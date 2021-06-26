import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PRODUCT_DETAIL_PAGE} from '../data';
import {LOG_EVENT} from '../utils/analytics';

const Menu = ({data, navigation}) => {
  const {name, title} = data;
  return (
    <TouchableOpacity
      onPress={() => {
        LOG_EVENT(`CLICK MENU - ${name}`);
        navigation.navigate(PRODUCT_DETAIL_PAGE);
      }}
      style={styles.container}>
      <View style={styles.wrapperIcon}>
        <Text>{title}</Text>
      </View>
      <Text style={styles.menuText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginHorizontal: 24,
  },
  wrapperIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  menuText: {
    textAlign: 'center',
  },
});

export default Menu;
