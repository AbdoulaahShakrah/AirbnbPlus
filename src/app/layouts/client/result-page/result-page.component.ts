import { Component, OnInit } from '@angular/core';
import { Property } from '../../../interfaces/Property';
import { AllPropertiesService } from '../../../services/allProperties/all-properties.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  properties: Property[] = [];

  constructor(private allPropertiesService: AllPropertiesService) {}

  ngOnInit() {
    // Subscrever aos resultados da pesquisa
    this.allPropertiesService.getSearchResults().subscribe((properties) => {
      this.properties = properties;
      console.log("Propriedades recebidas na página de resultados:", properties);
    });
  }

  captureProperties(properties: Property[]) {
    this.properties = properties;
    console.log("Propriedades capturadas:", properties);
  }
}
