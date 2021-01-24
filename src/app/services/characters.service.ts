import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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

   getCharactersByPage(page: number): Observable<Characters>{
     const params = new HttpParams()
       .set('page', page.toString());
     return this.http.get<Characters>(this.charactersURI, {params});
   }
}
