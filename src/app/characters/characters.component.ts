import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] | undefined;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService
      .getCharacters()
      .subscribe(result => this.characters = result.results);
  }
}
