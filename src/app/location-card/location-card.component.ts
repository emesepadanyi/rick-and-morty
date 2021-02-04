import { Component, Input, OnInit } from '@angular/core';
import { LocationDetailed } from '../models/location-detailed';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() location: LocationDetailed | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
