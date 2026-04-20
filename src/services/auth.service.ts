import { axiosClient } from '../api/axiosClient';

export const login = async (email: string, password: string) => {
  const response = await axiosClient.post('/auth/login', {
    email,
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
