import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  constructor(public characterService: CharacterService) {}
  title = 'breakingBad';

  ngOnInit(){
    this.characterService.getCharacters()
  }
}
