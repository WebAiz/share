import {Requests} from './Requests';
import {BASE_URL} from './Auth';
import {CourseAddPost, CourseCreateData} from '../types';

export class CourseService extends Requests {
  constructor() {
    super(BASE_URL);
  }

  getAllCourses() {
    const path = '/courses';
    return this.get(path);
  }

  getCourseById(courseId: number) {
    const path = `/courses/${courseId}`;
    return this.get(path);
  }

  addCourseById(data: CourseAddPost) {
    const path = `/courses/add/${data.id}`;
    return this.post(path, data);
  }

  createCourse(data: CourseCreateData) {
    const path = `/courses/create`;
    return this.post(path, data);
  }
}