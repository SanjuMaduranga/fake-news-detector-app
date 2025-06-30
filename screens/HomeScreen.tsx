import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fake News Detector</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter news to verify"
        multiline
        value={newsText}
        onChangeText={setNewsText}
      />
      <Button title="Check Now" color="#000000" onPress={handleCheck} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#e0f7fa' },
  title: { fontSize: 26, marginBottom: 20, color: '#0077b6', fontWeight: 'bold', textAlign: 'center' },
  input: { height: 120, backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20, textAlignVertical: 'top' },
});

export default HomeScreen;