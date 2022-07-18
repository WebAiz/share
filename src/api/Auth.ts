import {Requests} from './Requests';
import {Login, RegisterData} from '../types';

export const BASE_URL = 'http://localhost:8189/api/v1/app';


export class Auth extends Requests {
  constructor() {
    super(BASE_URL);
  }

  async login(data: Login) {
    const path = '/auth';
    const response = await this.post(path, data);
    if (response?.token) {
      sessionStorage.setItem('access_token', response.token);
      console.log(sessionStorage.getItem('access_token'))
      return response;
    }
  }

  async register(data: RegisterData) {
    const path = '/register';
    return await this.post(path, data);
  }
}