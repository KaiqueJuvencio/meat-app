import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects;
  serverName;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.findAll()
      .subscribe(projects => this.projects = projects)
  }
  OnInput(value) {
    this.serverName = value;
    console.log(this.serverName);

   }
}
