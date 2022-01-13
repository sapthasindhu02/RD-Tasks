import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private httpClient: HttpClient) {}

  private REST_API_SERVER = 'http://localhost:3000/users';

  current_page: string;
  userArr: Array<any>;
  update: boolean = true;
  createTrigger: boolean = false;

  getUsers(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER, { responseType: 'json' });
  }
  createUser(userObj: any) {
    return this.httpClient.post(`${this.REST_API_SERVER}`, userObj);
  }
  updateUserStatus(userObj: any, id: any) {
    return this.httpClient.put(`${this.REST_API_SERVER}/${id}`, userObj);
  }
}
