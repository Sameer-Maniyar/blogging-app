
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  imports: [ CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  MatNavList,
MatCardModule,
    MatGridListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  gridCols = 3;

  blogPosts = [
  {
    title: 'Responsive ',
    channel: 'Tech Guru',
    views: '1.2M',
    date: '1 week ago',
    image: '/dummyImage.png',
  },
  {
    title: 'Learn Material Design in Angular',
    channel: 'this is card',
    views: '500K',
    date: '3 days ago',
    image: '/dummyImage.png',
  },
  {
    title: 'Learn Material Design in Angular',
    channel: 'xyz',
    views: '500K',
    date: '3 days ago',
    image: '/dummyImage.png',
  },{
    title: 'Learn Material Design in Angular',
    channel: 'test',
    views: '500K',
    date: '3 days ago',
    image: '/dummyImage.png',
  }
  // Add more items...
];


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.gridCols = result.matches ? 1 : 3;
    });
  }

}
