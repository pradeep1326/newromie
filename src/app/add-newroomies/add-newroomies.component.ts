
// import { HeroArray } from './../heroInterface';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { HeroArray } from '../heroInterface';
import { heroObj } from '../mock-heroes';




@Component({
  selector: 'app-add-newroomies',
  templateUrl: './add-newroomies.component.html',
  styleUrls: ['./add-newroomies.component.css']
})
export class AddNewroomiesComponent implements OnInit {

  // @Input() roomieData;
  arr: HeroArray;
  @Output() childEvent = new EventEmitter<HeroArray>();

  roomie: {
    id: number,
    name: string,
    rent: number


  };


   newTask: any;
  // HeroArray: [{id: number, name: string, rent: number| CurrencyPipe}];
  // tslint:disable-next-line:align

  // newRoomie: any;

  AddRoomies(){
     console.log('hello');
    //  this.childEvent.emit(this.arr);

     if (this.newTask === '') {
    }
    else {

      this.childEvent.emit(this.newTask.push(this.arr));
      this.newTask = '';
    }
        // this.heroObj.push(this.newRoomie);
    }

    // const sample: HeroArray = {id:123, name:'abc', rent:1234};
    // this.childEvent.emit(this.heroObj.push(this.newRoomie()));

    // console.log('add roomies');



  constructor() { }

  ngOnInit(): void {
  }

}
