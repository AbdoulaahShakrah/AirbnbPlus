import { Component } from '@angular/core';

@Component({
  selector: 'app-myproprietaries',
  templateUrl: './myproprietaries.component.html',
  styleUrl: './myproprietaries.component.css'
})
export class MyproprietariesComponent {

  isMenuOpen : boolean = false

  onChangeNumber(isOpen : boolean){
    this.isMenuOpen = isOpen
  }
}
