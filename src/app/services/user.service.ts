import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Geo, User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getCustomUser(): Observable<Geo> {
    return this.http
      .get<User>('https://jsonplaceholder.typicode.com/users/1')
      .pipe(map((user) => user.address.geo));
  }
}
