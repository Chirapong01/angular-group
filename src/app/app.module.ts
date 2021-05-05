import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ArmPageComponent } from './arm-page/arm-page.component';
=======
import { OneComponent } from './one/one.component';
>>>>>>> ce428257db766bbb875f889503d4eeb502d114e6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ArmPageComponent
=======
    OneComponent
>>>>>>> ce428257db766bbb875f889503d4eeb502d114e6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
