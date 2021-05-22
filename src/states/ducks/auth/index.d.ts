export interface RequestUser {
  firstName: string;
  patronymic: string;
  secondName: string;
  password: string;
}

export interface ReponseData {
  secondname: string;
  email: string;
  token: string;
}

export interface LoginState {
  user: Object | null;
  isAuthenticated: boolean;
  isSubmitted: boolean;
  error: { message: string; status: number } | null;
}
