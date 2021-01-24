import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['./time-ago.component.scss']
})
export class TimeAgoComponent implements OnInit {
  @Input() date: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
