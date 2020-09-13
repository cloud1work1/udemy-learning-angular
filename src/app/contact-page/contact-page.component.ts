import { Component, OnInit } from '@angular/core';
import { Listing} from '../listing';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.findListingById().subscribe(item => this.listing = item);
  }

  sendMessage() {
    console.log(`Message: ${this.message}`);
    alert(`Your message was successfully delivered to: ${this.email}`);
  }

  back() {
    this.router.navigate(['/listings']);
  }

}
