import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './posts/posts';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Posts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial2');


}
