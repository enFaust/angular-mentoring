import {Course} from '../course';

export class CommonCourse implements Course {

  public id: number;
  public name: string;
  public date: Date;
  public length: number;
  public description: string;
  public isTopRated: boolean;

  constructor(id: number, name: string, date: Date, length: number, description: string, isTopRated: boolean) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.length = length;
    this.description = description;
    this.isTopRated = isTopRated;
  }

  toString(): string {
    return 'courses: ' + this.id +
      ', name: ' + this.name +
      ', date: ' + this.date +
      ', length: ' + this.length +
      ', description: ' + this.description +
      ', isTopRated: ' + this.isTopRated;
  }
}
