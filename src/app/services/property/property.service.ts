import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Property } from '../../interfaces/Property';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiKey = '775900e1e3msh5f0c112dd38acf5p1d863ajsn3f34a519fc18';
  private apiHost = 'airbnb13.p.rapidapi.com';
  private today = new Date();

   /*
exemplo de URL: 

https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-06-15&
checkout=2025-01-18&adults=2&children=0&infants=0&pets=0&page=1&currency=USD
  
  */

  private locations = [
    'Lisboa',
    'Paris',
    'New York',
    'Dubai',
    'Londres',
    'Marraquech',
    'Roma',
    'Istanbul',
    'Barcelona',
    'Amsterdam',
  ];

  private options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost,
    },
  };

  public getTodayDate(todayDate: Date) {
    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth() + 1).padStart(2, '0'); // padStart para fazer sempre de dois digitos
    const day = String(todayDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getLocation(): string {
    const index = Math.floor(Math.random() * this.locations.length);
    return this.locations[index];
  }

  private getUrl(
    location: string,
    checkin: string,
    checkout: string,
    adults: number,
    children: number,
    infants: number,
    pets: number
  ): string {
    return `https://${this.apiHost}/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}&page=1&currency=USD`;
  }

  // Observables inscritos recebem o valor do selectedProperty
  private selectedProperty = new BehaviorSubject<Property | null>(null);
  
  setSelectedProperty(property: Property) {
    this.selectedProperty.next(property);
  }

  getSelectedProperty(): Observable<Property | null> {
    return this.selectedProperty.asObservable();
  }

  async fetchProperties(url: string): Promise<any> {
    const response = await fetch(url, this.options);
    return response.json();
  }

  homePageSetUp(): Observable<Property[]> {
    const url = this.getUrl(
      this.getLocation(),
      this.getTodayDate(this.today),
      this.getTodayDate(this.today),
      2,
      0,
      0,
      0
    );
    // Pipe é usado para fazer operações na resposta que vem da função fetchProperties
    return from(this.fetchProperties(url)).pipe(
      map((result) => this.mapToProperties(result))
    );
  }

  onSearch(
    location: string,
    checkin: string,
    checkout: string,
    adults: number,
    children: number,
    infants: number,
    pets: number
  ): Observable<Property[]> {
    const url = this.getUrl(
      location,
      checkin,
      checkout,
      adults,
      children,
      infants,
      pets
    );
    // Pipe é usado para fazer operações na resposta que vem da função fetchProperties
    return from(this.fetchProperties(url)).pipe(
      map((result) => {
        const properties = this.mapToProperties(result);
        return properties;
      })
    );
  }
  private mapToProperties(result: any): Property[] {
    return result.results.map((item: any) => ({
      id: item.id,
      url: item.url,
      name: item.name,
      city: item.city,
      images: item.images,
      previewAmenities: item.previewAmenities,
      cancelPolicy: item.cancelPolicy,
      price_title: item.price.priceItems?.[0]?.title,
      amount: item.price?.total || 0,
      rating: item.rating || 0,
      deeplink: item.deeplink || "#",
      bathrooms: item.bathrooms,
      bedrooms: item.bedrooms,
      beds: item.beds,
      neighborhood: item.neighborhood,
      isSuperhost: item.isSuperhost,
      rareFind: item.rareFind,
      persons: item.persons,
      reviewsCount: item.reviewsCount,
      type: item.type,
      hostThumbnail: item.hostThumbnail
    }));
  }
  
}
