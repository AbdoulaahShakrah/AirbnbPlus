import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Property } from '../../../interfaces/Property';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{
  constructor(){}
  
  properties: Property[] = [];

  captureProperties(properties: Property[]) {
    this.properties = properties;
  }
}
