import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '@app/services/property.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  propertyForm: FormGroup;
  isEditMode: boolean = false;
  propertyId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.propertyForm = this.formBuilder.group({
      place: ['', Validators.required],
      area: ['', Validators.required],
      numBedrooms: ['', Validators.required],
      numBathrooms: ['', Validators.required],
      hospitalsNearby: [''],
      collegesNearby: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propertyId = params['id'];
      if (this.propertyId) {
        this.isEditMode = true;
        this.fetchPropertyDetails(this.propertyId);
      }
    });
  }

  fetchPropertyDetails(propertyId: string) {
    this.propertyService.getPropertyById(propertyId)
      .subscribe(
        property => {
          this.propertyForm.patchValue(property);
        },
        error => {
          console.error('Error fetching property details:', error);
        }
      );
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const propertyData = this.propertyForm.value;
      if (this.isEditMode) {
        this.propertyService.updateProperty(this.propertyId!, propertyData)
          .subscribe(
            response => {
              console.log('Property updated successfully:', response);
              this.router.navigate(['/seller/dashboard']);
            },
            error => {
              console.error('Error updating property:', error);
            }
          );
      } else {
        this.propertyService.addProperty(propertyData)
          .subscribe(
            response => {
              console.log('Property added successfully:', response);
              this.router.navigate(['/seller/dashboard']);
            },
            error => {
              console.error('Error adding property:', error);
            }
          );
      }
    }
  }
}