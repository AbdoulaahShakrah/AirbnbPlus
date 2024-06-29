import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Property } from '../../../interfaces/Property';
import { PropertyService } from '../../../services/property/property.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  constructor(private propertyService: PropertyService){}
  ngOnInit(): void {
    this.homePageSetUp()
  }
  
  
  properties: Property[] = [];
  
  homePageSetUp(): void {
    const sub = this.propertyService.homePageSetUp().subscribe(
      (response) => {
        this.properties = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching property data', error);
      }
    );
  }

  captureProperties(properties: Property[]) {
    this.properties = properties;
  }
}
