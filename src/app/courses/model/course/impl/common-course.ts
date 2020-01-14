import {Course} from '../course';

export class CommonCourse implements Course {

  public id: number;
  public title: string;
  public creationDate: string;
  public duration: string;
  public description: string;

  constructor(id: number, title: string, creationDate: string, duration: string, description: string) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
  }
}
