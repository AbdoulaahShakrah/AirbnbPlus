import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from '../../../services/property/property.service';
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
  checkInDate: string | Date = new Date();
  checkOutDate: string | Date = new Date();
  adults: number | 0 = 0;
  babies: number | 0 = 0;
  animals: number | 0 = 0;
  date = new Date;

 
  constructor(private propertyService: PropertyService, private hostService: MenuService) {}

  ngOnInit(): void {
    this.getProperty();
    this.checkInDate = this.hostService.checkin ||this.propertyService.getTodayDate(this.date);
    this.checkOutDate = this.hostService.checkout || this.propertyService.getTodayDate(this.date);
    this.adults = this.hostService.adults || 0;
    this.babies = this.hostService.babies || 0;
    this.animals = this.hostService.animals || 0;
  }

  getProperty(): void {
    this.propertySubscription = this.propertyService.getSelectedProperty().subscribe((property) => {
      this.selectedProperty = property;
    });
  }

  ngOnDestroy(): void {
    //cancelar a inscrição ao sair do componente
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
