import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../services/api';

export default function ProfileScreen({navigation}) {
  const [user, setUser] = useState(null);

  // Fetch user profile data
  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await instance.get('/auth/me', {
        headers: {Authorization: token},
      });
      setUser(response.data);
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}], // Reset navigation to Login
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <Text>Chargement...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.text}>Nom : {user.username}</Text>
      <Text style={styles.text}>Email : {user.email}</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  text: {fontSize: 16, marginBottom: 10},
});
