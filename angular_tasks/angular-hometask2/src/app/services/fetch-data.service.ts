import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private httpClient:HttpClient) { }

  private REST_API_SERVER="http://localhost:3000/users";

  current_page:string;
  userArr:Array<any>;
  update:boolean=true;
  createTrigger:boolean=false;

  getUsers():Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER,{ 'responseType':'json'}).pipe(retry(3),catchError(this.handleError));
  }
  createUser(userObj:any){
    return this.httpClient.post(`${this.REST_API_SERVER}`,userObj);
  }
  updateUserStatus(userObj:any,id:any){
    return this.httpClient.put(`${this.REST_API_SERVER}/${id}`,userObj);
  }
  handleError(error:HttpErrorResponse){
    let errmsg='Unknown';
    if(error.error instanceof ErrorEvent){
      errmsg=`Error:${error.error.message}`;
    }
    else{
      errmsg=`Error code:${error.status}\n Message:${error.message}`;
    }
    window.alert(errmsg);
    return throwError(errmsg);
  }
  
  }