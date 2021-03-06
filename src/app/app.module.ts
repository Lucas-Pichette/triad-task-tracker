import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UtilityRowComponent } from './utility-row/utility-row.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  // any component, directive, or pipe (privately available to this module)
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    UtilityRowComponent,
    FooterComponent
  ],
  // if you want something to be public to other modules
  exports: [],
  // Makes exported declarations of other modules available in *this* module
  // from packages
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  // Services and guards go here (available to this component, and any component that imports it)
  providers: [],
  // a component that's used to initially load app
  bootstrap: [AppComponent]
})
export class AppModule { }
