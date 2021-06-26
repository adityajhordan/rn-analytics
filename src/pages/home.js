import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {backgroundColor} from '../styles';
import Banner from '../components/banner';
import Menu from '../components/menu';
import Footer from '../components/footer';
import {listMenu} from '../data';
import {LOG_EVENT, SET_USER_ID} from '../utils/analytics';

const Home = ({navigation}) => {
  useEffect(() => {
    SET_USER_ID('xxx');

    setTimeout(() => {
      LOG_EVENT('HOME_PAGE');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Banner title="Banner" />
      <Text style={styles.subMenuText}>Kategori Pilihan</Text>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.menuWrapper}>
          {listMenu.map((each, index) => {
            return (
              <Menu navigation={navigation} data={each} key={`menu-${index}`} />
            );
          })}
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: backgroundColor,
    width: '100%',
    height: '100%',
  },
  menuWrapper: {
    flexDirection: 'row',
  },
  subMenuText: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
