import { Component, OnInit } from '@angular/core';
import { MyPropertyService } from '../../../../services/myProperty/my-property.service';
import { Property } from '../../../../interfaces/Property';

@Component({
  selector: 'app-myproperties-card',
  templateUrl: './myproperties-card.component.html',
  styleUrls: ['./myproperties-card.component.css']
})
export class MyPropertiesCardComponent implements OnInit {

  myProperties: Property[] = [];

  constructor(private myPropertyService: MyPropertyService) { }

  ngOnInit(): void {
    this.myPropertyService.get().subscribe((properties) => 
      this.myProperties = properties);
  }
}
