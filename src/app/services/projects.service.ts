import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get(`https://api.github.com/users/KaiqueJuvencio/repos`)
  }
}
