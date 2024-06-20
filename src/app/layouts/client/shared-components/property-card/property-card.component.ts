import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from '../../../../services/property/property-service.service';
import { Property } from '../../../../interfaces/Property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})

export class PropertyCardComponent {
  @Input() properties: Property[] = [];
  loading: boolean = true;

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}


  showPropertyDetails(property: Property) {
    this.propertyService.setSelectedProperty(property);
    this.router.navigateByUrl('property/' + property.id);
  }
}
