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
  isModalVisible: boolean = false;
  propertyToDelete: Property | null = null;

  constructor(private myPropertyService: MyPropertyService) { }

  ngOnInit(): void {
    this.myPropertyService.get().subscribe((properties) => 
      this.myProperties = properties);
  }

  showModal(property: Property): void {
    this.propertyToDelete = property;
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
    this.propertyToDelete = null;
  }

  confirmDelete(): void {
    if (this.propertyToDelete) {
      this.removeMyProperty(this.propertyToDelete);
    }
    this.hideModal();
  }
  
  removeMyProperty(myProperty: Property){
    this.myProperties = this.myProperties.filter(property => property.id !== myProperty.id);
    this.myPropertyService.remove(myProperty.id).subscribe(() => {
    }, (error) => {
      console.error('An error occurred:', error);
    });}
}
