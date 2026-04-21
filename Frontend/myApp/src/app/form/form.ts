import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';


@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  carName:string ="";

  // @Output() carAdded = new EventEmitter<string>();

  constructor(private carService : Car){}

  onSubmit(){
    console.log(this.carName);
    //send data to list from form
    // this.carAdded.emit(this.carName);

    this.carService.addCarName(this.carName);

    //sending through service


    this.carName="";
  }
}
