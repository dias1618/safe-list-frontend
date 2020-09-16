import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-listas',
  templateUrl: './grid-listas.component.html',
  styleUrls: ['./grid-listas.component.scss']
})
export class GridListasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doStuff(){
    console.log('asd')
  }

}
