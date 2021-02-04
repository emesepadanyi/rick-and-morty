import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() searchTerms: string[] = [];
  @Output() searchQuery = new EventEmitter<{ type: string, word: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  search(type: string, word: string): void {
    this.searchQuery.emit({ type: type, word: word })
    console.log(type, word);
  }
}
