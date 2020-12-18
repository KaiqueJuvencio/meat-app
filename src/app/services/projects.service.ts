import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {ErrorHandler} from '../app.erro.handler';

@Injectable()
export class ProjectsService {
  constructor(private http : Http) { }

  findAll(){
    return this.http.get(`https://api.github.com/users/KaiqueJuvencio/repos`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
