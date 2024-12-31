import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from '../services/api';

export default function RegisterScreen({navigation}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/auth/register', formData);
      Alert.alert(
        'Succès',
        'Compte créé avec succès, connectez-vous maintenant !',
      );
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(
        'Erreur',
        error.response?.data?.message || 'Une erreur est survenue',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={formData.username}
        onChangeText={value => handleInputChange('username', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={value => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={formData.password}
        onChangeText={value => handleInputChange('password', value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
