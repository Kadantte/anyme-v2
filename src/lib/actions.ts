import axios, { AxiosError } from 'axios';
import rateLimit from 'axios-rate-limit';
import axiosRetry from 'axios-retry';

const axiosInstance = rateLimit(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  }),
  { maxRequests: 1, perMilliseconds: 1000 }
);

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount: number) => {
    return retryCount * 1000;
  },
  retryCondition: (error: AxiosError<unknown, any>) =>
    error.response?.status === 429,
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

export const getSeasonalAnime = async (page: number) => {
  try {
    const res = await axiosInstance.get(`/seasons/now?page=${page}`);
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
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
      `/anime?genres=${genreIds}&order_by=favorites&sort=desc&limit=25`
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
  page = 1,
}: {
  type?: string;
  filter?: string;
  page?: number;
}) => {
  try {
    const res = await axiosInstance.get(
      `/top/anime?type=${type}&filter=${filter}&page=${page}`
    );
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getTopCharacter = async ({ page = 1 }: { page?: number }) => {
  try {
    const res = await axiosInstance.get(`/top/characters?page=${page}`);
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
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

export const getDetailAnimeCharacters = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/anime/${id}/characters`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAnimeByGenres = async (id: string, page: number) => {
  try {
    const res = await axiosInstance.get(`/anime?genres=${id}&page=${page}`);
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAnimeSearch = async ({
  q,
  page = 1,
}: {
  q: string;
  page?: number;
}) => {
  try {
    const res = await axiosInstance.get(`/anime?q=${q}&page=${page}`);
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getTopMovies = async (page: number) => {
  try {
    const res = await axiosInstance.get(`/top/anime?type=movie&page=${page}`);
    const data = res.data;

    const totalItem = res.data.pagination.items.total;
    const itemPerPage = res.data.pagination.items.per_page;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const currentPage = res.data.pagination.current_page;

    return {
      data: data.data,
      totalPage: totalPage,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
