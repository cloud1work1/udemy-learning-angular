import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { SampleListings } from '../sample-listings';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  constructor() { }

  ngOnInit() {
    this.listings = SampleListings;
  }

}
