import { Component, ElementRef, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-prop-navbar',
  templateUrl: './prop-navbar.component.html',
  styleUrl: './prop-navbar.component.css'
})
export class PropNavbarComponent {

  isMenuOpen : boolean = false
  @Output() isMenuOpenChange = new EventEmitter<boolean>()

  toggleSideMenu(){
    this.isMenuOpen = !this.isMenuOpen
    this.isMenuOpenChange.emit(this.isMenuOpen);

  }
}
