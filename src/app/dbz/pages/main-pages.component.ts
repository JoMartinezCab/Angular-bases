import { Character } from '../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent {
  public characters:Character[] = [];

  newCharacter(Character: Character):void{
    this.characters.unshift(Character);
  }

  removeCharacter(index:number):void{
    this.characters.splice(index, 1);
  }
}
