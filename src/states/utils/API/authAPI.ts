/* eslint-disable consistent-return */
import { RequestUser, ReponseData } from 'states/ducks/auth/index.d';
import { axios } from '../axiosInterceptor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userLogin = async (user: RequestUser): Promise<any> => {
  try {
    const { data } = await axios.post<ReponseData>(
      `${process.env.REACT_APP_API}/api/auth/login`,
      user,
    );

    return data;
  } catch (err) {
    if (err.response) {
      throw new Error(
        JSON.stringify({
          message: err.response,
        }),
      );
    }

    if (err.request) {
      // eslint-disable-next-line no-console
      console.log(err.request.data);
    }
  }
};
