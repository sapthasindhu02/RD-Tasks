import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor() {}
  current_page: string;
  users: Array<any> = [
    {
      id: '1',
      firstName: 'Dave',
      lastName: 'Jay',
      age: 22,
      login: 'Dave_Jay',
      password: '123',
      isDeleted: true,
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Son',
      age: 22,
      login: 'John_Son',
      password: '123',
      isDeleted: false,
    },
    {
      id: '3',
      firstName: 'Harry',
      lastName: 'Potter',
      age: 22,
      login: 'Harry_Potter',
      password: '123',
      isDeleted: false,
    },
    {
      id: '4',
      firstName: 'Thomas',
      lastName: 'Shelby',
      age: 22,
      login: 'Thomas_Shelby',
      password: '123',
      isDeleted: false,
    },
    {
      id: '5',
      firstName: 'Peter',
      lastName: 'Buffey',
      age: 22,
      login: 'Peter_Buffey',
      password: '123',
      isDeleted: true,
    },
    {
      id: '6',
      firstName: 'Indu',
      lastName: 'Mati',
      age: 22,
      login: 'Indu_Mati',
      password: '123',
      isDeleted: true,
    },
    {
      id: '7',
      firstName: 'Warren',
      lastName: 'Buffet',
      age: 22,
      login: 'Warren_Buffet',
      password: '123',
      isDeleted: false,
    },
  ];
}
