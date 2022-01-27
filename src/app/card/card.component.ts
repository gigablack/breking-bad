import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Interfaces/character.interface'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character: Character = {} as Character;

  constructor() { }

  ngOnInit(): void {
  }

}
