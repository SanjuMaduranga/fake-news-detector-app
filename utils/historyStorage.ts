import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryItem } from '../types';

const HISTORY_KEY = 'news_history';

export const saveToHistory = async (item: HistoryItem) => {
  const existing = await getHistory();
  const updated = [item, ...existing];
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
};

export const getHistory = async (): Promise<HistoryItem[]> => {
  const data = await AsyncStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearHistory = async () => {
  await AsyncStorage.removeItem(HISTORY_KEY);
};