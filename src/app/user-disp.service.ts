import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDispService {
  private url: string = 'assets/data/empld.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
