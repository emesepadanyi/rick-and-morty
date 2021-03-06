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
  searchTerms: string[] = ["name", "species", "type"];
  info: Info | undefined;
  characters: Character[] = [];

  searchQuery: { page?: number, type?: string, word?: string };

  constructor(private charactersService: CharactersService) {
    this.searchQuery = { page: 1 }
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService
      .getCharacters(this.searchQuery)
      .subscribe(result => {
        this.characters = result.results;
        this.info = result.info;
      });
  }

  pageChanged(newPage: number) {
    this.searchQuery.page = newPage;

    this.getCharacters();
  }

  searchCharacters(options: { type: string, word: string }) {
    this.searchQuery.page = 1;
    this.searchQuery.type = options.type;
    this.searchQuery.word = options.word;

    this.getCharacters();
  }
}
