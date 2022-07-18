import {Requests} from './Requests';
import {BASE_URL} from './Auth';

export class UserService extends Requests {
  constructor() {
    super(BASE_URL);
  }

  getUserInfo() {
    const path = '/user';
    return this.get(path);
  }

  getUserProfile() {
    const path = '/user/profile';
    return this.get(path);
  }
}