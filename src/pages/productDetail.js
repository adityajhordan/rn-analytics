import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {backgroundColor} from '../styles';
import Footer from '../components/footer';
import {LOG_EVENT} from '../utils/analytics';

const ProductDetail = () => {
  useEffect(() => {
    LOG_EVENT('PRODUCT_DETAIL');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.productDetail}>
        <Text>IMAGE PRODUCT</Text>
      </View>
      <Text style={styles.subMenuText}>Detail Product - Rp.400000</Text>
      <Text>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>
      <TouchableOpacity
        onPress={() => LOG_EVENT('ADD_TO_CART')}
        style={styles.addToCart}>
        <Text>Tambah ke Keranjang</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: backgroundColor,
    width: '100%',
    height: '100%',
  },
  productDetail: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    backgroundColor: 'gray',
  },

  subMenuText: {
    marginVertical: 24,
    fontSize: 22,
    fontWeight: 'bold',
  },
  addToCart: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
    backgroundColor: 'gray',
    position: 'absolute',
    bottom: 80,
    right: 24,
  },
});

export default ProductDetail;
