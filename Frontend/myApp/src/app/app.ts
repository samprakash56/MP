import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { Form } from './form/form';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Counter ,CommonModule, FormsModule, Form , List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  onlyNumber(event: KeyboardEvent) {
  const charCode = event.key.charCodeAt(0);

  // Allow numbers (0–9)
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
  }

  a = 0 ;
  b =0;

  c=0;

  cal() {
  const numA = Number(this.a);
  const numB = Number(this.b);

  if (isNaN(numA) || isNaN(numB)) {
    alert("Please enter valid numbers");
    this.c = 0;
    return;
  }

  if (numB === 0) {
    alert("Divisor should not be 0");
    this.c = 0;
    return;
  }

  this.c = numA / numB;
  }

  movies =["a","b","c","d"]

  checkk=false;
  what=false;

  // carNames:string[] =[];

  // onCarAdded(carName:string){

  //   console.log(carName,'from form');
  //   this.carNames.push(carName);
    
  // }

  // onCarDeleted(){
  //   this.carNames.pop();
  // }


  

}

