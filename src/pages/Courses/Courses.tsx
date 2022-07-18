// @flow
import * as React from 'react';
import styles from './Coureses.module.css';
import {SecondaryBtn} from '../../components/SecondaryBtn/SecondaryBtn';
import {CourseService} from '../../api/Course';
import {Modal} from '../../components/Modal/Modal';
import {useEffect, useState} from 'react';
import {CreateCourse} from '../../components/Forms/CreateCourse/CreateCourse';
import {CourseSection} from '../../components/CourseSection/CourseSection';
import {MainButton} from '../../components/MainButton/MainButton';

type Props = {};


export function Courses(props: Props) {
  const arr = new Array(5).fill(0)
  const [isOpen, setIsOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const courseService = new CourseService();
  const role = sessionStorage.getItem('role') || '';

  async function getCourses() {
    const courses = await courseService.getAllCourses();
    setCourseList(courses);
  }

  const handleClose = () => {
    setIsOpen(false);
    getCourses();
  };
  // useEffect(() => {
  //   getCourses();
  // }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.posts}>
          {role === 'ROLE_ADMIN' &&
              <MainButton onClick={() => setIsOpen(true)}>
                  Create New Course
              </MainButton>}
          {arr.map((el, i) => (
            <CourseSection key={el.id} {...el}/>
          ))}
        </div>
        {/*<div className={styles.comments}>*/}
        {/*  <h2>Courses notes</h2>*/}
        {/*</div>*/}
      </div>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}
             title={'Create CourseSection'}>
        <CreateCourse onClose={handleClose}/>
      </Modal>
    </div>
  );
}