import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { CharactersComponent } from './characters/characters.component';
import { HeaderComponent } from './header/header.component';
import { CharactersService } from './services/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    CharactersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
