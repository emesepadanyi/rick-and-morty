import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Characters } from '../models/characters.interface';
import { Character } from '../models/character.interface';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {
    super();
  }

  getCharacters(options?: { page?: string, type?: string, word?: string }): Observable<Characters> {
    let params = new HttpParams();
    if (options) {
      if (options.page) {
        params = params.set("page", options.page);
      }
      if (options.type && options.word) {
        params = params.set(options.type, options.word);
      }
    }

    return this.http.get<Characters>(this.charactersURI, { params }).pipe(tap(response => this.loggingService.log(response)));
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.charactersURI + "/" + id).pipe(tap(response => this.loggingService.log(response)));
  }
}
