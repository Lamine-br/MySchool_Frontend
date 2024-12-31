import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue</Text>
      <Button
        title="Voir les cours"
        onPress={() => navigation.navigate('Courses')}
      />
      <Button title="Profil" onPress={() => navigation.navigate('Profile')} />
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
});
