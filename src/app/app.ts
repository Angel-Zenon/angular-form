import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './assets/shared/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('mrMorale');
}
