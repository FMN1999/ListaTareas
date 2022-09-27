import { Injectable } from '@angular/core';
import {Task} from '../Task'
import {TASKS} from '../mock-tasks'
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:4200/tasks'
  
  constructor(private http : HttpClient) {}

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
