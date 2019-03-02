import { Injectable } from '@angular/core';
import { PropertiesBackendService } from './properties-backend.service';
import { RequestOptions, Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class HttpPropertiesBackendService extends PropertiesBackendService {

  private addPropertyUrl:string="api/property/addproperty";
  private getPropertyUrl:string="api/property/getproperty?propertyId=";
  private getPropertiesUrl:string="api/property/getAllproperties";
  private updatePropertyUrl:string = "api/property/updateproperty";
  private deletePropertyUrl:string="api/property/deleteproperty?propertyId=";

  private jsonContentOptions:RequestOptions;

  constructor(private http:Http){
    super();
    let headersJson: Headers = new Headers({
      'Content-Type':'application/json',
    });
    this.jsonContentOptions = new RequestOptions({headers:headersJson})
  }

  addProperty(newProperty: Property): Observable<number> {
    
    return this.http.post(this.addPropertyUrl,JSON.stringify(newProperty),this.jsonContentOptions).pipe(map(response=>response.json() as number));
  }
  getProperty(id: number): Observable<Property> {
    return this.http.get(this.getPropertyUrl+id ,this.jsonContentOptions).pipe(map(response=>response.json()));
  }
  getProperties(): Observable<Property[]> {
    return this.http.get(this.getPropertiesUrl ,this.jsonContentOptions).pipe(map(response=>response.json()));
  }
  updateProperty(updatedProperty: Property): Observable<number> {
    return this.http.post(this.updatePropertyUrl,JSON.stringify(updatedProperty),this.jsonContentOptions).pipe(map(response=>response.json() as number));
  }
  deleteProperty(id: number): Observable<number> {
    return this.http.delete(this.deletePropertyUrl+id ,this.jsonContentOptions).pipe(map(response=>response.json())); 
  }
}
