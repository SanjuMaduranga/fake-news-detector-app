import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [newsText, setNewsText] = useState('');

  const handleCheck = () => {
    if (!newsText.trim()) return;
    navigation.navigate('Result', { news: newsText });
  };

  const handleViewHistory = () => {
    navigation.navigate('History');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Fake News Detector</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter news to verify"
        placeholderTextColor="#888"
        multiline
        value={newsText}
        onChangeText={setNewsText}
      />

      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handleViewHistory}>
        <Text style={styles.secondaryButtonText}>View History</Text>
      </TouchableOpacity>
      <Text style={styles.vtext}>version 1.0</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#0077b6',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vtext: {
    fontSize: 12,
    marginTop: 52,
    color: '#808080',
    fontWeight: 'regular',
    textAlign: 'center',
  },
  input: {
    height: 140,
    backgroundColor: '#fc1c1',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#b2ebf2',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  secondaryButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;