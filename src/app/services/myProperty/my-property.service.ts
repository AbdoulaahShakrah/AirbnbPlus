import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../../interfaces/Property';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyPropertyService {
  private apiUrl = 'http://localhost:3000/properties';

  private myProperties: Property[] = [];

  constructor(private http: HttpClient) {}

  post(property: Property) {
    this.http
      .post(this.apiUrl, property)
      .toPromise()
      .then((data: any) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
        throw new Error('Something went wrong; please try again later.');
      });
  }

  get(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl).pipe(
      tap((data: Property[]) => (this.myProperties = data)),
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  remove(id: number) {
    return this.http.delete<Property>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  onSearch(location: string): Property[]{
    this.get().subscribe()
    return this.myProperties.filter(property => property.city.toLowerCase().includes(location.toLowerCase()))
  }
}
