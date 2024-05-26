import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '@app/services/property.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {
  properties: Property[] = [];
  filters: any = {};

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.fetchProperties();
  }

  fetchProperties() {
    this.propertyService.getProperties(this.filters)
      .subscribe(
        properties => {
          this.properties = properties;
        },
        error => {
          console.error('Error fetching properties:', error);
        }
      );
  }

  applyFilters(filters: any) {
    this.filters = filters;
    this.fetchProperties();
  }
}