import { Injectable } from '@angular/core';
import { Character } from './Interfaces/character.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl: string = 'https://www.breakingbadapi.com/api/characters'
  characters: Character[] = []

  constructor(private http: HttpClient) { }

  getCharacters(): void {
    this.http.get<Character[]>(this.apiUrl+'?limit=10')
      .subscribe(data => this.characters = data)
  }

  getCharacterByName(name: string): void {
    this.http.get<Character[]>(`${this.apiUrl}?name=${name}`)
      .subscribe(data => this.characters = data)
  }

  cleanCharacters(): void {
    this.characters = []
  }
}
