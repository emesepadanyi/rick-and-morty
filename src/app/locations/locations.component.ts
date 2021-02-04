import { Component, OnInit } from '@angular/core';
import { Info } from '../models/info.interface';
import { LocationDetailed } from '../models/location-detailed';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  searchTerms: string[] = ["name", "type", "dimension"];
  locations: LocationDetailed[] = [];
  info: Info | undefined;

  searchQuery: { page?: number, type?: string, word?: string };

  constructor(private locationsService: LocationsService) {
    this.searchQuery = { page: 1 }
  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.locationsService
      .getLocations(this.searchQuery)
      .subscribe(result => {
        this.locations = result.results;
        this.info = result.info;
      });
  }

  pageChanged(newPage: number) {
    this.searchQuery.page = newPage;

    this.getLocations();
  }

  searchLocations(options: { type: string, word: string }) {
    this.searchQuery.page = 1;
    this.searchQuery.type = options.type;
    this.searchQuery.word = options.word;

    this.getLocations();
  }
}
