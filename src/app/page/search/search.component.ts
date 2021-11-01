import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = '';
  @Output() searchTextChanged =  new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {}

  search(): void {
    if (this.searchText) {
      this.searchTextChanged.emit(this.searchText);
    }
  }



}
