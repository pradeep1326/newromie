import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FilterPipe} from './pipes/filter.pipe';

import { FormsModule } from '@angular/forms';
import { AddNewroomiesComponent } from './add-newroomies/add-newroomies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterPipe,
    AddNewroomiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
