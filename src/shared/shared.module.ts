import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

let modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  FlexLayoutModule,
]

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
