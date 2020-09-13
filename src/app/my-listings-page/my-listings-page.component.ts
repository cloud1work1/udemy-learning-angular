import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Listing } from '../listing';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  myListings: Listing[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllListings().subscribe(items => this.myListings = items);
  }

  deleteEntry(index: number) {
    
  }

}
