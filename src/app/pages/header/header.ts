import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { CardService } from '../card-service';

@Component({
  selector: 'app-header',
  
   imports: [
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {


  searchForm!:FormGroup

  cards: any[] = [];
  filteredCards: any[] = [];


  constructor(private dialog: MatDialog,private fb:FormBuilder,private router: Router,private cardService: CardService) {}

ngOnInit() {


 
    this.cards = this.cardService.getCards();
    this.filteredCards = [...this.cards];
  

  this.intilizeForm()



  this.searchForm.get('search')?.valueChanges.subscribe((value: any) => {
    const searchValue = (value || '').toLowerCase();
    this.filteredCards = this.cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchValue) ||
        card.description.toLowerCase().includes(searchValue) ||
        card.category.toLowerCase().includes(searchValue) ||
        card.author.toLowerCase().includes(searchValue)
    );
  });
}

intilizeForm(){
    this.searchForm = this.fb.group({
  search: ['']
});
}

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  

}
