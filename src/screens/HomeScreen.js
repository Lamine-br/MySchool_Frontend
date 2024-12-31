import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MySchool</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.buttonText}>Voir les cours</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
