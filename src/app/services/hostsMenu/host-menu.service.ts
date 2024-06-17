import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuVisible = false;
  adults = 1;
  babies = 0;
  animals = 0;
  location = '';
  checkin = '';
  checkout = '';

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  increment(type: string) {
    if (type === 'adults') {
      this.adults++;
    } else if (type === 'babies') {
      this.babies++;
    } else if (type === 'animals') {
      this.animals++;
    }
  }

  decrement(type: string) {
    if (type === 'adults' && this.adults > 1) {
      this.adults--;
    } else if (type === 'babies' && this.babies > 0) {
      this.babies--;
    } else if (type === 'animals' && this.animals > 0) {
      this.animals--;
    }
  }
}
