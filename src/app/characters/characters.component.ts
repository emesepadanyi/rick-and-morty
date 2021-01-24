import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.interface';
import { Info } from '../models/info.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  info: Info | undefined;
  characters: Character[] = [];

  page: number = 1;
  searchQuery: { type: string, word: string } | undefined;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService
      .getCharacters()
      .subscribe(result => {
        this.characters = result.results;
        this.info = result.info;
      });
  }

  pageChanged(newPage: number) {
    this.charactersService
      .getCharactersByPage(newPage)
      .subscribe(result => {
        this.characters = result.results;
        this.info = result.info;
        this.page = newPage;
      });
  }

  searchCharacters(options: { type: string, word: string }) {
    this.charactersService
      .searchCharacters(options)
      .subscribe(result => {
        this.characters = result.results;
        this.info = result.info;
        this.searchQuery = options;
        this.page = 1;
      });
  }
}
