import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name: string = ''

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.name){
      this.characterService.getCharacters()
    } else {
      this.characterService.getCharacterByName(this.name)
    }
  }

}
