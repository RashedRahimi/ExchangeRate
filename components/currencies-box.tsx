import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CurrenciesBox = () => {
  return (
    <View style={styles.titleBoxInMainBox}>
      <Text style={styles.subtitleText}>86.70</Text>
      <Text style={styles.subtitleText}>86.90</Text>
      <Text style={[styles.subtitleText, {marginRight: -60}]}>دلار</Text>
      <View>
        <Text style={{fontSize: 18, color: '#FFD700'}}>🇺🇸</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  titleBoxInMainBox: {
    backgroundColor: '#74a4d4',
    width: '95%',
    height: 55,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 5,
  },
});
export default CurrenciesBox;
