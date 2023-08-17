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
  public onDeleteCharacter:EventEmitter<string> = new EventEmitter;

  characterTrackBy(index: any, characterList: Character){
    return characterList ? characterList.id : undefined;
  }

  emitDeleteCharacter(id:string):void {
    this.onDeleteCharacter.emit(id);
  }
}
