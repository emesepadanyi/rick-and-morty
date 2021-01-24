import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getCharacters(): Observable<Characters>{
     return this.http.get<Characters>(this.charactersURI);
   }
}
