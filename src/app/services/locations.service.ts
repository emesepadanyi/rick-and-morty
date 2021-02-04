import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggingService } from './logging.service';
import { Locations } from '../models/locations.interface';
import { LocationDetailed } from '../models/location-detailed';

@Injectable({
  providedIn: 'root'
})
export class LocationsService extends BaseService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {
    super();
  }

  getLocations(options?: { page?: number, type?: string, word?: string }): Observable<Locations> {
    let params = new HttpParams();
    if (options) {
      if (options.page) {
        params = params.set("page", options.page.toString());
      }
      if (options.type && options.word) {
        params = params.set(options.type, options.word);
      }
    }

    return this.http.get<Locations>(this.locationsURI, { params }).pipe(tap(response => this.loggingService.log(response)));
  }

  getLocation(id: string): Observable<LocationDetailed> {
    return this.http.get<LocationDetailed>(this.charactersURI + "/" + id).pipe(tap(response => this.loggingService.log(response)));
  }
}
