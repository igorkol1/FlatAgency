import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

// Properties Section
import { PropertiesComponent } from './components/properties/components/properties.component';
import { PropertyService } from './components/properties/services/property.service';
import { PropertiesBackendService } from './services/properties-backend.service';
import { HttpPropertiesBackendService } from './services/http-properties-backend.service';
import { PropertyDetailsComponent } from './components/properties/components/property-details/property-details.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PropertiesComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'properties/new-property', component: PropertyDetailsComponent },
      { path: 'properties/property-details/:id', component: PropertyDetailsComponent },
      { path: 'properties/property-update/:id', component: PropertyDetailsComponent },
      { path: '**', redirectTo: 'properties' }
    ])
  ],
  providers: [
    PropertyService,
    { provide: PropertiesBackendService, useClass: HttpPropertiesBackendService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
