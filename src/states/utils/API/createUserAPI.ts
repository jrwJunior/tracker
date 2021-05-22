/* eslint-disable @typescript-eslint/no-explicit-any */
// import { IRequest } from 'states/ducks/create/index.d';
import { axios } from '../axiosInterceptor';

export const userCreate = async (data: any): Promise<any> => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/api/user/create`, data);
  } catch (err) {
    throw new Error(JSON.stringify({ message: err.response.data }));
  }
};
