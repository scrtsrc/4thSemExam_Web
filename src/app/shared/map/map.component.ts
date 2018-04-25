import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 39.017696;
  lng = 125.763588;

  constructor() { }

  ngOnInit() {
  }

}
