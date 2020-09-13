import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../listing';
import { SampleListings } from '../sample-listings';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing;
  id: number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const listings:Listing[] = SampleListings;
    this.activatedRoute.params.subscribe(key => {
      this.id = key['id'];
      console.log(this.id);
     this.listing = listings.find(item => item.id == this.id);
    });
    
  }

}
