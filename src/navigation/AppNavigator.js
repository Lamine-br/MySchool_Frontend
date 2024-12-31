import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {Ionicons} from 'react-native-vector-icons';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CourseScreen from '../screens/CourseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigation with Icons
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cours"
        component={CourseScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{headerShown: false}} // Hide header for tabs
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
