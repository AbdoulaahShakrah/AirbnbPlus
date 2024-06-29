import { Component } from '@angular/core';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myProperties.component.html',
  styleUrl: './myproperties.component.css'
})
export class MyPropertiesComponent {

  isMenuOpen : boolean = false

  onChangeNumber(isOpen : boolean){
    this.isMenuOpen = isOpen
  }
}
