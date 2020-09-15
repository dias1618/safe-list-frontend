import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { SharedModule } from 'src/shared/shared.module';
import { ToastrModule } from "ngx-toastr";
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from 'src/services/auth.service';
import { AuthGuard } from 'src/guards/auth-guard';
import { AuthController } from 'src/controllers/auth.controller';
import { SessionService } from 'src/services/session.service';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
