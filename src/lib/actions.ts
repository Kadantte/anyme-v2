import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getHeroes = async () => {
  try {
    const res = await axiosInstance.get(`/top/anime?filter=favorite&limit=5`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getDetailAnime = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/anime/${id}/full`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getSeasonalAnime = async () => {
  try {
    const res = await axiosInstance.get(`/seasons/now`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAnimeReviews = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/anime/${id}/reviews`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
