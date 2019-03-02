import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

// Properties Section
import {PropertiesComponent} from './components/property/properties.component';
import {PropertyService} from './components/property/services/property.service';
import {PropertiesBackendService} from './services/properties-backend.service';
import {HttpPropertiesBackendService} from './services/http-properties-backend.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'properties', component: PropertiesComponent}
    ])
  ],
  providers: [
    PropertyService,
    {provide:PropertiesBackendService,useClass: HttpPropertiesBackendService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
