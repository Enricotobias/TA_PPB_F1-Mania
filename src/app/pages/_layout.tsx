import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import AboutScreen from './about';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline'; 
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle-outline' : 'information-circle-outline'; 

            
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'red', // Change to 'red' for active tab
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
