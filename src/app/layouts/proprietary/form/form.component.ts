import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  isMenuOpen: boolean = false;

  onChangeNumber(isOpen: boolean){
      this.isMenuOpen = isOpen;
    }
}
