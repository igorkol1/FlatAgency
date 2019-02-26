import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class PropertiesBackendService {
  abstract addProperty(newProperty: Property): Observable<number>;

  abstract getProperty(id: number): Observable<Property>;

  abstract getProperties(): Observable<Property[]>;

  abstract updateProperty(updatedProperty: Property): Observable<number>;

  abstract deleteProperty(property: Property): Observable<number>;
}
