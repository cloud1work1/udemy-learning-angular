import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from './listing';
import { SampleListings } from './sample-listings';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listings: Listing[] = [];
  constructor(private activatedRoute: ActivatedRoute) { }

  getAllListings(): Observable<Listing[]> {
    this.listings = SampleListings;
    return of(this.listings);
  }

  findListingById(): Observable<Listing> {
    let id: number;
    this.activatedRoute.params.subscribe(param => {
      id = param['id'];
    });
    return of(this.listings.find(item => item.id === id));
  }

}
