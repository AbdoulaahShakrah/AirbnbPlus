import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from '../../../services/property/property-service.service';
import { Property } from '../../../interfaces/Property';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../services/hostsMenu/host-menu.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;
  @ViewChild('imageList') imageList!: ElementRef;

  selectedProperty: Property | null = null;
  propertySubscription: Subscription | undefined;
  checkInDate: string | null = null;
  checkOutDate: string | null = null;

  constructor(private propertyService: PropertyService, private hostService: MenuService) {}

  ngOnInit(): void {
    this.getProperty();
    this.checkInDate = this.hostService.checkin || null;
    this.checkOutDate = this.hostService.checkout || null;
  }

  getProperty(): void {
    // Inscreva-se para receber a propriedade selecionada
    this.propertySubscription = this.propertyService.getSelectedProperty().subscribe((property) => {
      this.selectedProperty = property;
    });
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição ao sair do componente
    if (this.propertySubscription) {
      this.propertySubscription.unsubscribe();
    }
  }

  scrollRight(): void {
    if (this.imageList) {
      this.imageList.nativeElement.scrollLeft += 900;
    }
  }

  scrollLeft(): void {
    if (this.imageList) {
      this.imageList.nativeElement.scrollLeft -= 900;
    }
  }
}
