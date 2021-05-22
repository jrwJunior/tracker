/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestUsers } from 'states/ducks/users/index.d';
import { axios } from '../axiosInterceptor';

/* eslint-disable consistent-return */
// eslint-disable-next-line max-len
export const getUsersAndFilterUsers = async (
  postData: IRequestUsers = {},
  query: string = '?page=0&size=5',
): Promise<any> => {
  const postUserData = () =>
    axios.post(
      `${process.env.REACT_APP_API}/api/user/get/filter/${query}&sort=firstName,asc`,
      postData,
    );
  const getPositions = () =>
    axios.get(`${process.env.REACT_APP_API}/api/position/all`);

  try {
    // eslint-disable-next-line max-len
    const [users, positions] = await axios.all([
      postUserData(),
      getPositions(),
    ]);

    return {
      ...users.data,
      positions: positions.data,
    };
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

export const getFilterUsers = async (
  postData: IRequestUsers = {},
  query = '?page=0&size=5',
): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/api/user/get/filter/${query}&sort=firstName,asc`,
      postData,
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
