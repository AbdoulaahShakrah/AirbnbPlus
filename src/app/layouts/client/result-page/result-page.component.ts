import { Component } from '@angular/core';
import { Property } from '../../../interfaces/Property';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})

export class ResultPageComponent {
  properties: Property[] = [];

  
  captureProperties(properties: Property[]) {
    this.properties = properties;
  }
}
