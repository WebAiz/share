import {Requests} from './Requests';
import {BASE_URL} from './Auth';
import {ArticleData} from '../components/Forms/AddArticle/AddArticle';

export class ArticleService extends Requests {
  constructor() {
    super(BASE_URL);
  }

  getAllArticle() {
    const path = '/articles';
    return this.get(path);
  }

  getArticle(fileName: string){
    const path = `/articles/show/${fileName}`
    return this.get(path);
  }
  postArticle(data: ArticleData) {
    const path = `/articles/upload?title=${data.title}`;
    return this.postFile(path, data.formData);
  }
}