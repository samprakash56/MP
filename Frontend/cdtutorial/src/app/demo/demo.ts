import { Component } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-demo',
  standalone:true,
  imports: [Highlight],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {}
