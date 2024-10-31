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

export const getMoreLikeThis = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/anime/${id}/recommendations`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getMoreLikeThisbyGenre = async (id: number) => {
  try {
    const animeDetail = await getDetailAnime(id);

    const genreIds = animeDetail.data.genres
      .map((genre: any) => genre.mal_id)
      .join(',');

    const res = await axiosInstance.get(
      `/anime?genres=${genreIds}&order_by=favorites&sort=desc`
    );

    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getTopAnime = async ({
  type = '',
  filter = '',
}: {
  type?: string;
  filter?: string;
}) => {
  try {
    const res = await axiosInstance.get(
      `/top/anime?type=${type}&filter=${filter}`
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getTopCharacter = async () => {
  try {
    const res = await axiosInstance.get(`/top/characters`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getGenres = async () => {
  try {
    const res = await axiosInstance.get(`/genres/anime`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
