import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model'; // Ensure this path is correct
import { PropertyService } from '@app/services/property.service'; // Ensure this path is correct

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.fetchSellerProperties();
  }

  fetchSellerProperties() {
    this.propertyService.getSellerProperties()
      .subscribe(
        (properties: Property[]) => {
          this.properties = properties;
        },
        (error) => {
          console.error('Error fetching seller properties:', error);
        }
      );
  }

  deleteProperty(propertyId: string | undefined) {
    if (propertyId) {
      this.propertyService.deleteProperty(propertyId)
        .subscribe(
          (response) => {
            console.log('Property deleted successfully:', response);
            this.fetchSellerProperties(); // Refresh the list after deletion
          },
          (error) => {
            console.error('Error deleting property:', error);
          }
        );
    } else {
      console.error('Property ID is undefined');
    }
  }
  
}
