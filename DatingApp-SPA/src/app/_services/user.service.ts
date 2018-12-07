import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* const httpOptions = {
   headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token') // 注意 Bearer 後面要加空白
  })
};
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  // return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  return this.http.get<User[]>(this.baseUrl + 'users');
}

getUser(id): Observable<User> {
  // return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

updateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'users/' + id, user);
}

}
