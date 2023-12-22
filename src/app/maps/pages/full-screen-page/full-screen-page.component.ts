import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

//(mapboxgl as any).accessToken = 'pk.eyJ1IjoibHVjaWFmcmVzbm8iLCJhIjoiY2xxZ2g0bW95MTg4MjJtbWs1ZWNkbmI4aSJ9.R8fVopOOT9_zlC1sw8Ovjw';
//Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk...');

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  //permite tomar una referencia a un componente html
  @ViewChild('map') divMap? : ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      //accessToken: 'pk...',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
