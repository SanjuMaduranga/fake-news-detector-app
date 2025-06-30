import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { predictFakeNews, PredictionResult } from '../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen = ({ navigation, route }: Props) => {
  const { news } = route.params;
  const [result, setResult] = useState<PredictionResult | null>(null);

  useEffect(() => {
    const checkNews = async () => {
      const response = await predictFakeNews(news);
      setResult(response);
    };
    checkNews();
  }, [news]);

  return (
    <View style={styles.container}>
      {result ? (
        <>
          <Text style={styles.label}>Prediction:</Text>
          <Text
            style={[
              styles.resultText,
              { color: result.label === 'Fake' ? 'red' : 'green' },
            ]}
          >
            {result.label}
          </Text>
          <Text style={styles.confidence}>
            Confidence: {Math.round(result.confidence * 100)}%
          </Text>
        </>
      ) : (
        <ActivityIndicator size="large" color="#0077b6" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e8f5e9',
  },
  label: {
    fontSize: 20,
    color: '#0077b6',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  confidence: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default ResultScreen;