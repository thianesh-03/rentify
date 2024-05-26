import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models/property.model';
import { PropertyService } from '@app/services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const propertyId = params['id'];
      this.fetchPropertyDetails(propertyId);
    });
  }

  fetchPropertyDetails(propertyId: string) {
    this.propertyService.getPropertyById(propertyId)
      .subscribe(
        property => {
          this.property = property;
        },
        error => {
          console.error('Error fetching property details:', error);
        }
      );
  }

  onInterested() {
    if (this.property) {
      // Display seller contact details
      console.log('Seller Contact Details:', this.property.sellerDetails);
    }
  }
}