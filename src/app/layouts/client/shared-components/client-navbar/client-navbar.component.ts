import { Component, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../../../services/hostsMenu/host-menu.service';
import { Property } from '../../../../interfaces/Property';
import { PropertyService } from '../../../../services/property/property.service';
import { Router } from '@angular/router';
import { MyPropertyService } from '../../../../services/myProperty/my-property.service';
import { delay, forkJoin } from 'rxjs';
import { AllPropertiesService } from '../../../../services/allProperties/all-properties.service';
@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent {

  @Output() propertiesSend = new EventEmitter<Property[]>(); // Event emitter para enviar as propriedades

  properties: Property[] = [];
  myProperties: Property[] = [];

  constructor(
    public menuService: MenuService,
    private elRef: ElementRef,
    private allPropertiesService: AllPropertiesService,
    private router: Router
  ) {}


  onSearch(): void {
    this.allPropertiesService.onSearch().subscribe(
      (allProperties) => {
        this.propertiesSend.emit(allProperties);
        this.router.navigate(['/result']
        );
      },
      error => {
        console.error('Error fetching property data', error);
      }
    );
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const container = this.elRef.nativeElement.querySelector('.navBarContainer');
    if (window.pageYOffset > 20) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  }
}
