import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../domain/instructor';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + '/api/instructors/';
   }

   public getAll():Observable<any>{
     return this.httpClient.get(this.url);
   }

   public getById(ID: number): Observable<any> {
    return this.httpClient.get(this.url + ID);
  }

   public save(instructor: Instructor): Observable<any> {
    return this.httpClient.post(this.url, instructor);
  }

  public edit(instructor: Instructor): Observable<any> {
    return this.httpClient.put(this.url + instructor.ID, instructor);
  };

  public delete(ID: number) {
    return this.httpClient.delete(this.url + ID);
  }
  


  }