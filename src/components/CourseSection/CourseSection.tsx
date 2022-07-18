// @flow
import * as React from 'react';
import styles from './CourseSection.module.css';
import {SecondaryBtn} from '../SecondaryBtn/SecondaryBtn';
import {useEffect, useState} from 'react';
import {AddCourse} from '../Forms/AddCourse/AddCourse';
import {Modal} from '../Modal/Modal';
import {CourseService} from '../../api/Course';
import {Course} from '../Course/Course';

export function CourseSection({title, id}) {
  const arr = new Array(3).fill(0)
  const [isAdd, setIsAdd] = useState(false);
  const [sectionList, setSectionList] = useState([]);
  const role = sessionStorage.getItem('role') || '';
  const courseService = new CourseService();
  const handleAddCourse = () => {
    setIsAdd(false);
    getCourseSections();
  };

  async function getCourseSections() {
    const sections = await courseService.getCourseById(id);
    setSectionList(sections.lessonDtoList)
    console.log('sections', sections);
  }

  // useEffect(() => {
  //   getCourseSections();
  // }, []);
  return (
    <div className={styles.course}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {arr.map((el, i) => (
          <Course {...el}/>
        ))}
      </div>
      {
        role === 'ROLE_ADMIN' && <div className={styles.btn}>
              <SecondaryBtn onClick={() => setIsAdd(true)}>
                  Add Section
              </SecondaryBtn>
          </div>
      }
      <Modal onClose={() => setIsAdd(false)} open={isAdd}
             title={'Add CourseSection Section'}>
        <AddCourse onClose={handleAddCourse} id={id}/>
      </Modal>
    </div>
  );
};