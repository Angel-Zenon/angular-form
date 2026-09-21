import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  templateUrl : './navbar.html',
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  imports: [RouterLink, RouterLinkActive],
})
export class Navbar {

}
