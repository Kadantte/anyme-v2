import axios from 'axios';

export const getHeroes = async () => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/top/anime?filter=favorite&limit=1`
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
