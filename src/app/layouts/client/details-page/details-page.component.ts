import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { PropertyService } from '../../../services/property/property-service.service';
import { Property } from '../../../interfaces/Property';
import { MenuService } from '../../../services/hostsMenu/host-menu.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  
})
export class DetailsPageComponent implements OnInit {
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;
  @ViewChild('imageList') imageList!: ElementRef;
  

  constructor(private propertyService: PropertyService, private menuService: MenuService) { }
  
  selectedProperty: Property | null = null;
  ngOnInit(): void {
    this.getProperty()
  }
  getProperty(){
    this.propertyService.getSelectedProperty().subscribe((property) => {
      this.selectedProperty = property
    })
  }
  
  scrollRight(): void {
    if (this.imageList) {
      this.imageList.nativeElement.scrollLeft += 900;
      console.log("scroll right")
    }
  }

  scrollLeft(): void {
    if (this.imageList) {
      this.imageList.nativeElement.scrollLeft -= 900;
      console.log("scroll left")
    }
  }

}
