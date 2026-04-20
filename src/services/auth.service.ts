import { axiosClient } from '../api/axiosClient';

export const login = async (email: string, password: string) => {
  const response = await axiosClient.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};
