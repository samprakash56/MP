import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Form } from '../form/form';
import { Car } from '../car';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{

  // @Input() carNames:string[] =[];

  // @Output() carDeleted = new EventEmitter<number>();
  
  // deleteCar(){
  //   this.carDeleted.emit();
  // }
  carNames:string[] =[];

  constructor(private carService : Car ){}

  ngOnInit(): void {
    this.carService.carNames$.subscribe((names)=>{
      this.carNames=names;
    })
  }

}
