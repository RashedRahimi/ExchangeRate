import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrenciesBox from '../components/currencies-box';
const HomeScreen = () => {
  const currenciesRate = [
    {
      currencyName: 'دلار',
      buyPrice: '86.99',
      sellPrice: '86.79',
      icon: '🇺🇸',
    },
    {
      currencyName: 'دلار فردایی',
      buyPrice: '86.99',
      sellPrice: '86.79',
      icon: '🇺🇸',
    },
    {
      currencyName: 'تومان نفد',
      buyPrice: '86.99',
      sellPrice: '86.79',
      icon: '🇺🇸',
    },
    {
      currencyName: 'تومان چک',
      buyPrice: '86.99',
      sellPrice: '86.79',
      icon: '🇺🇸',
    },
    {
      currencyName: 'کلدار',
      buyPrice: '86.99',
      sellPrice: '86.79',
      icon: '🇺🇸',
    },
  ];
  const renderItem = ({item}: any) => {
    console.log(item);
    return (
      <CurrenciesBox
        buyPrice={item.buyPrice}
        sellPrice={item.sellPrice}
        currencyName={item.currencyName}
        icon={item.icon}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.updateText}>آخرین بروز رسانی</Text>
      <View style={styles.subtitleTextContainer}>
        <Text style={styles.subtitleText}>ساعت</Text>
        <Text style={[styles.subtitleText, {marginRight: 20}]}>تاریخ</Text>
        <Text style={styles.subtitleText}>روز</Text>
      </View>
      <View style={styles.subtitleTextContainer}>
        <Text style={styles.subtitleText}>23:23</Text>
        <Text style={styles.subtitleText}>30/حمل </Text>
        <Text style={styles.subtitleText}>پنج شنبه</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.titleBoxInMainBox}>
          <Text style={styles.subtitleText}>فروش</Text>
          <Text style={styles.subtitleText}>خرید</Text>
          <Text style={[styles.subtitleText, {marginRight: 20}]}>ارز</Text>
        </View>
        {/* <CurrenciesBox
          currencyName={'دلار'}
          buyPrice={'86.99'}
          sellPrice={'86.79'}
          icon={'🇺🇸'}
        />
        <CurrenciesBox
          currencyName={''}
          buyPrice={''}
          sellPrice={''}
          icon={''}
        /> */}
        <FlatList renderItem={renderItem} data={currenciesRate} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  updateText: {
    color: '#1976d3',
    fontSize: 28,
    fontWeight: 'bold',
    // marginTop: 20,
    alignSelf: 'center',
  },
  subtitleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  mainBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginTop: 30,
    alignSelf: 'center',
  },
  titleBoxInMainBox: {
    backgroundColor: '#0769cb',
    width: '100%',
    height: 55,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
export default HomeScreen;
