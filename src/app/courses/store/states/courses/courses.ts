import {Course} from "../../../model/course/course";

export interface ICourseState {
  courses: Course[];
}

export const initialCourseState: ICourseState = {
  courses: []
};
