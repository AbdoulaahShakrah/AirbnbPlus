import { Injectable } from '@angular/core';
import { MyPropertyService } from '../myProperty/my-property.service';
import { PropertyService } from '../property/property.service';
import { Property } from '../../interfaces/Property';
import { MenuService } from '../hostsMenu/host-menu.service';
import { BehaviorSubject, Observable, catchError, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPropertiesService {

  
  properties: Property[] = [];
  myProperties: Property[] = [];

  constructor(private menuService: MenuService, private myPropertyService: MyPropertyService, private propertyService: PropertyService) { }
  private searchResults = new BehaviorSubject<Property[]>([]);

  onSearch(): Observable<Property[]> {
    return forkJoin({
      myProperties: this.myPropertyService.onSearch(this.menuService.location),
      properties: this.propertyService.onSearch(
        this.menuService.location, 
        this.menuService.checkin, 
        this.menuService.checkout, 
        this.menuService.adults, 
        0, 
        this.menuService.babies, 
        this.menuService.animals
      )
    }).pipe(
      map(({ properties, myProperties }) => {
        this.searchResults.next([...myProperties, ...properties]); // Atualizar o BehaviorSubject com os novos resultados da pesquisa
        return [...myProperties, ...properties];
      }),
      catchError(error => {
        console.error('Error fetching property data', error);
        return [];
      })
    );
  }

  getSearchResults(): Observable<Property[]> {
    return this.searchResults.asObservable();
  }
}
