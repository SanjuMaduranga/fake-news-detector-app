import axios from 'axios';

export interface PredictionResult {
  label: string;
  confidence: number;
}

const API_URL = 'http://localhost:8000/predict'; // FastAPI endpoint

export const predictFakeNews = async (
  newsText: string
): Promise<PredictionResult> => {
  try {
    const response = await axios.post(API_URL, { text: newsText });
    return {
      label: response.data.label === 0 ? 'Fake' : 'Real',
      confidence: response.data.confidence,
    };
  } catch (error) {
    console.error('Prediction error:', error);
    return { label: 'Error', confidence: 0 };
  }
};