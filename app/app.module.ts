import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routableComponents } from './app-routing.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  // imports: [BrowserModule, RouterModule],
  // exports: [RouterModule],
  // declarations: [HomeComponent],
  // bootstrap: [HomeComponent],

  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    RouterModule
    //,AppRoutingModule
  ],
  declarations: [HomeComponent],
  //, routableComponents
  //providers: [CanActivateAuthGuard, CharacterService, UserProfileService, VehicleService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
