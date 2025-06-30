export type RootStackParamList = {
  Home: undefined;
  Result: { news: string };
  History: undefined;
};

export type HistoryItem = {
  id: string; 
  news: string;
  label: string;
  confidence: number;
  timestamp: string; 
};