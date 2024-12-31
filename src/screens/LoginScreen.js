import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text, Snackbar} from 'react-native-paper';
import instance from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await instance.post('/auth/login', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('MainTabs');
    } catch (err) {
      setError('Erreur de connexion');
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Se connecter
      </Button>

      {error ? (
        <Snackbar visible={true} onDismiss={() => setError('')}>
          {error}
        </Snackbar>
      ) : null}

      <View style={styles.registerContainer}>
        <Text>Vous n'avez pas de compte ?</Text>
        <Button mode="text" onPress={() => navigation.navigate('Register')}>
          Créez un compte
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {marginBottom: 15},
  button: {marginTop: 10},
  registerContainer: {marginTop: 20, alignItems: 'center'},
});
