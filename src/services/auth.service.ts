import { axiosClient } from '../api/axiosClient';

export const login = async (username: string, password: string) => {
  const response = await axiosClient.post('/api/login', {
    username,
    password,
  });

  return response.data;
};

export const createUser = async (payload: {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}) => {
  const response = await axiosClient.post('/auth/signup', payload);
  return response.data;
};
