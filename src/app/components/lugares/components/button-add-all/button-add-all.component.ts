import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-add-all',
  templateUrl: './button-add-all.component.html',
  styleUrls: ['./button-add-all.component.scss']
})
export class ButtonAddAllComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addBancos($event){
    
  }

}
