/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from '../axiosInterceptor';

export const getAllPositions = async (query: string = ''): Promise<any> => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/position/${query}`,
    );

    return data;
  } catch (err) {
    throw new Error(JSON.stringify({ message: err.response.data }));
  }
};

export const createPosition = async (postData: {
  name: string;
  id?: number;
}): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/api/position/create`,
      postData,
    );

    return data;
  } catch (err) {
    throw new Error(JSON.stringify({ message: err.response.data }));
  }
};

export const putUpdatePosition = async (postData: any): Promise<any> => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API}/api/position/update`,
      postData,
    );
    return data;
  } catch (err) {
    throw new Error(JSON.stringify({ message: err.response.data }));
  }
};

export const deletePosition = async (id: number): Promise<any> => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API}/api/position/${id}`,
    );
    return data;
  } catch (err) {
    throw new Error(err.response.status);
  }
};
