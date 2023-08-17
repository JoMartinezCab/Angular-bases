import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[] = [];

  addNewCharacter(character: Character):void{
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.unshift(newCharacter);
  }

  removeCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
