import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PropertyService } from '../../../../services/property/property.service';
import { Property } from '../../../../interfaces/Property';
import { Router } from '@angular/router';
import { prototype } from 'events';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})

export class PropertyCardComponent implements OnChanges {
  @Input() properties: Property[] = [];
  loading: boolean = true;
  
  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['properties']) {
      this.loading = changes['properties'].currentValue.length === 0;
    }
  }

  showPropertyDetails(property: Property) {
    this.propertyService.setSelectedProperty(property);
    //this.router.navigateByUrl('property/' + property.id);
    this.router.navigate(['property/' + property.id], {
      state: property
    })
  }
}
