import axios, { AxiosResponse } from 'axios';
import { Cookies, Notify } from 'quasar';
import { useUserStore } from 'src/stores/user';

const TOKEN_KEY = 'auth_token';

export const authToken = {
  get: (): string => Cookies.get(TOKEN_KEY),
  set: (newToken: string): void => Cookies.set(TOKEN_KEY, newToken),
  remove: (): void => Cookies.remove(TOKEN_KEY),
};

interface Customer {
  email: string;
  password: string;
}
interface AuthResult {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
  };
}
interface AuthError {
  response: {
    data: { message: string };
    status: number;
  };
}

export async function login(data: Customer): Promise<AuthResult | AuthError> {
  try {
    const link = import.meta.env.VITE_LOGIN;
    const response: AxiosResponse<AuthResult> = await axios({
      url: link,
      method: 'post',
      data: data,
    });
    Notify.create('Успешный вход! meow~ 🐈🐈');

    const { token } = response.data;

    authToken.set(token);

    const userStore = useUserStore();
    userStore.setIsAuthenticated(true);

    return response.data;
  } catch (error: unknown) {
    const errorObj = error as AuthError;

    Notify.create(errorObj.response.data.message + ' 🙄');
    return errorObj;
  }
}
