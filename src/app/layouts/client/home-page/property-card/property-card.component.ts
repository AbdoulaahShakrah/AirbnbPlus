import { Component, Input } from '@angular/core';
import { PropertyService } from '../../../../services/property/property-service.service';
import { Property } from '../../../../interfaces/Property';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  constructor(
    private propertyService: PropertyService,
    private route: Router,
    private spinner: NgxSpinnerService
  ) {}
  @Input() properties: Property[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.homePageSetUp();
  }

  homePageSetUp(): void {
    this.loading = true;

    this.propertyService.homePageSetUp().subscribe(
      (response) => {
        this.loading = false;
        this.properties = response;

      },
      (error) => {
        this.loading = false;
        console.error('Error fetching property data', error);

      }
    );

  }

  showPropertyDetails(property: Property) {
    this.propertyService.setSelectedProperty(property);
    this.route.navigateByUrl('property/' + property.id);
  }
}
