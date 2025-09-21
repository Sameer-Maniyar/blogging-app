import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-details',
   imports: [MatChipsModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatIconModule,MatCardModule,CommonModule,RouterModule,MatSidenavModule,MatListModule,MatToolbarModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails {

  constructor(
    public dialogRef: MatDialogRef<BlogDetails>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(){
    console.log(this.data);
    
  }

}
