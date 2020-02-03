import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
  }

  getMenu(): Array<any> {
    const menu = [
      {
        name: 'Courses', path: './courses', children:
          [
            {
              name: 'Add',
              path: './add',
            },
            {
              name: 'Edit',
              path: './:id',
            },
          ]
      }];

    return menu;
  }
}
