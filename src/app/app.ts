

import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule,MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {}



  








