import {Requests} from './Requests';
import {BASE_URL} from './Auth';

export class ImageService extends Requests {
  constructor() {
    super(BASE_URL);
  }

  async getImageById(userId: number) {
    const path = `/images/show/client/${userId}`;
    const blob = await this.getFile(path);
    return URL.createObjectURL(blob);
  }

  uploadAvatar(file: File) {
    const path = '/images/upload';
    const formData = new FormData();
    formData.append('file', file);
    return this.postFile(path, formData);
  }
}