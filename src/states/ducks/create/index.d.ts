export interface IRequest {
  firstname: string;
  secondname: string;
  patronymic: string;
  email: string;
  phone: string;
  position: {
    value: number;
    label: string;
  };
  password: string;
  role: {
    value: string;
    label: string;
  };
}

export interface ICreateUserState {
  successfully: boolean;
  loading: boolean;
  error: null | string;
}
