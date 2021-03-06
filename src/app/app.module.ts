import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { CharactersComponent } from './characters/characters.component';
import { HeaderComponent } from './header/header.component';
import { CharactersService } from './services/characters.service';
import { CharacterCardComponent } from './character-card/character-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TimeAgoComponent } from './time-ago/time-ago.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LoggingService } from './services/logging.service';
import { LocationsService } from './services/locations.service';
import { LocationCardComponent } from './location-card/location-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    CharactersComponent,
    HeaderComponent,
    CharacterCardComponent,
    LocationCardComponent,
    SearchbarComponent,
    TimeAgoComponent,
    TimeAgoPipe,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    CharactersService,
    LocationsService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
