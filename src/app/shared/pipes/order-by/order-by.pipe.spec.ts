import {OrderByPipe} from './order-by.pipe';
import {CommonCourse} from "../../../courses/model/course/impl/common-course";

describe('OrderByDatePipe', () => {

  const pipe = new OrderByPipe();

  const courses = [
    new CommonCourse(1, `Video Course 1. Name tag`, new Date(2020, 0, 12), 180,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', true),
    new CommonCourse(2, `Video Course 2. Name tag`, new Date(2019, 0, 12), 30,
      'Learn about where you can find course descriptions, what information they include, how they work,' +
      ' and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', false),
    new CommonCourse(3, `Video Course 3. Name tag`, new Date(2021, 0, 12), 190,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements' +
      ' and in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', false),
    new CommonCourse(4, `Video Course 4. Name tag`,  new Date(2018, 0, 12), 13,
      'Learn about where you can find course descriptions, what information they include, how they work,' +
      ' and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements ' +
      'and in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', true),
  ];

  const sortCourses = [
    new CommonCourse(4, `Video Course 4. Name tag`,  new Date(2018, 0, 12), 13,
      'Learn about where you can find course descriptions, what information they include, how they work,' +
      ' and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements ' +
      'and in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', true),
    new CommonCourse(2, `Video Course 2. Name tag`, new Date(2019, 0, 12), 30,
      'Learn about where you can find course descriptions, what information they include, how they work,' +
      ' and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', false),
    new CommonCourse(1, `Video Course 1. Name tag`, new Date(2020, 0, 12), 180,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', true),
    new CommonCourse(3, `Video Course 3. Name tag`, new Date(2021, 0, 12), 190,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of coursesObservable course description. Course descriptions report information about coursesObservable' +
      ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements' +
      ' and in course schedules that contain descriptions for all courses offered during coursesObservable particular semester.', false),
    ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('sort by date'), () => {
    expect(pipe.transform(courses)).toContain(sortCourses);
  }
});
