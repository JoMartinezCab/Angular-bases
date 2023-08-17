import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter:EventEmitter<number> = new EventEmitter;

  characterTrackBy(index: any, characterList: Character){
    return characterList ? characterList.name : undefined;
  }

  emitDeleteCharacter(index:number):void {
    this.onDeleteCharacter.emit(index);
  }
}
