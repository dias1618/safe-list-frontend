import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { SharedModule } from 'src/shared/shared.module';
import { ToastrModule } from "ngx-toastr";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ListaService } from 'src/app/services/lista.service';
import { ListaController } from 'src/app/controllers/lista.controller';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    NgxMaterialTimepickerModule.setLocale('pt-BR')
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
