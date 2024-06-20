import { Component, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../../../services/hostsMenu/host-menu.service';
import { Property } from '../../../../interfaces/Property';
import { PropertyService } from '../../../../services/property/property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent {

  @Output() propertiesSend = new EventEmitter<Property[]>(); // Event emitter para enviar as propriedades

  properties: Property[] = [];

  constructor(
    public menuService: MenuService,
    private propertyService: PropertyService,
    private router: Router
  ) {}

  onSearch(): void {
    this.propertyService.onSearch(
      this.menuService.location, 
      this.menuService.checkin, 
      this.menuService.checkout, 
      this.menuService.adults, 
      0, 
      this.menuService.babies, 
      this.menuService.animals
    ).subscribe(
      response => {
        this.properties = response;
        this.propertiesSend.emit(this.properties); // Emitir as propriedades após a pesquisa
        this.router.navigate(['/result']); // Navegar para a página de resultados
      },
      error => {
        console.error('Error fetching property data', error);
      }
    );
  }
}
