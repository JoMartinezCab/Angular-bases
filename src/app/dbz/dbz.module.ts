import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  exports:[
    MainPagesComponent
  ],
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
