import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  constructor(private http: HttpClient) { //Creates http client on creation
  }

  getData():Observable<any> {
    console.log("Worked");
    return this.http.get<any[]>("http://localhost:8080/returnArray");
  }
}
