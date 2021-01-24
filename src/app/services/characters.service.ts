import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {

  constructor() {
    super();
   }
}
