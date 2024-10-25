import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getHeroes = async () => {
  try {
    const res = await axios.get(`${API_URL}/top/anime?filter=favorite&limit=5`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getDetailAnime = async (id: number) => {
  try {
    const res = await axios.get(`${API_URL}/anime/${id}/full`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getSeasonalAnime = async () => {
  try {
    const res = await axios.get(`${API_URL}/seasons/now`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
