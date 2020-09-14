import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  listing: Listing = {id: 0, name: '', price:0, description: ''};
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  addNewListing() {
    this.dataService.addListing(this.listing);
    alert('Listing saved');
    this.router.navigate(["/my-listings"]);
  }
}
