import { AddNewroomiesComponent } from './../add-newroomies/add-newroomies.component';
import { heroObj } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { HeroArray } from '../heroInterface';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  names = heroObj;
  newTask: any;



  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  }
