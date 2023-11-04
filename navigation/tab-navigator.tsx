import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Image, Text} from 'react-native';
import HomeScreen from '../screens/home-screen';
import ChangeRateScreen from '../screens/change-rate-screen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <MCIcon name={'home'} size={size} color={color} />;
            } else {
              iconName = focused ? 'currency-exchange' : 'currency-exchange';
              return <MIcon name={iconName} size={size} color={color} />;
            }
          },
          headerTitleAlign: 'center',
          headerTintColor: '#1976d3',
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {backgroundColor: '#1976d3'},
          headerRight: () => (
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                marginRight: 15,
              }}>
              نرخ یاب
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 55,
                marginLeft: 10,
              }}
              source={require('ExchangeRate/assets/logo2.png')}
            />
          ),
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Change Rate" component={ChangeRateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;
