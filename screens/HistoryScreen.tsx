import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getHistory } from '../utils/historyStorage';
import { HistoryItem } from '../types';

const HistoryScreen = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getHistory();
      setHistory(data);
    };
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checked News History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.news}>{item.news}</Text>
            <Text style={{ color: item.label === 'Fake' ? 'red' : 'green' }}>
              {item.label} ({Math.round(item.confidence * 100)}%)
            </Text>
            <Text style={styles.time}>{new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  item: { padding: 10, marginBottom: 10, backgroundColor: '#f1f1f1', borderRadius: 10 },
  news: { fontSize: 16 },
  time: { fontSize: 12, color: '#555' },
});

export default HistoryScreen;