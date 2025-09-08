import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
 imports: [MatChipsModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatIconModule,MatCardModule,CommonModule,RouterModule,MatSidenavModule,MatListModule,MatToolbarModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {


  cards = [
  {
    id:1,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    category: 'Design',
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye',
    date: '20 Jan 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id:2,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    category: 'Development',
    title: 'Best practices for code reviews',
    description: 'Discover techniques to ensure high quality and maintainable code through effective peer reviews.',
    author: 'Michael Scott',
    date: '10 Feb 2022',
    authorImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id:3,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Technology',
    title: 'The future of AI in industry',
    description: 'Exploring how artificial intelligence is shaping the future across different industries worldwide.',
    author: 'Sarah Connor',
    date: '5 Mar 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/3.jpg'
  },

  {
    id:4,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    category: 'Leadership',
    title: 'Effective team management',
    description: 'Practical tips for building, managing, and inspiring high-performing teams in any industry.',
    author: 'Sophia Lee',
    date: '30 May 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/5.jpg'
  },

  { 
    id:5,
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    category: 'Design',
    title: 'Color theory in UI/UX',
    description: 'How color choices affect usability, mood, and overall design aesthetics in digital products.',
    author: 'Emily Carter',
    date: '8 Jul 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/7.jpg'
  },

  {
    id:6,
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
    category: 'Finance',
    title: 'Managing personal finances',
    description: 'Smart money habits and tools to take control of your financial future with confidence.',
    author: 'Anna Brown',
    date: '10 Sep 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    id:7,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    category: 'Health',
    title: 'Work-life balance in tech',
    description: 'How tech professionals can avoid burnout and maintain a healthy balance in their careers.',
    author: 'Mark Wilson',
    date: '2 Oct 2022',
    authorImage: 'https://randomuser.me/api/portraits/men/10.jpg'
  }
];



  filteredCards = [...this.cards]; // start with all cards




   searchForm = new FormGroup({
    search: new FormControl('')  // single FormControl
  });

  
  
  ngOnInit() {
    this.searchForm.get('search')?.valueChanges.subscribe((value: any) => {
      const searchValue = value.toLowerCase();
      this.filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(searchValue) ||
        card.description.toLowerCase().includes(searchValue) ||
        card.category.toLowerCase().includes(searchValue) ||
        card.author.toLowerCase().includes(searchValue)
      );
    });
  }

}
