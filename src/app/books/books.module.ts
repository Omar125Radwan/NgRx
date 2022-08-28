import { BooksEffects } from './store/books.effects';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './store/books.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    StoreModule.forFeature("mybooks", bookReducer),
    EffectsModule.forFeature([BooksEffects])
  ]
})
export class BooksModule { }
