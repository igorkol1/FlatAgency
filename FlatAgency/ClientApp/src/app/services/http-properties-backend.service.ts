import { Injectable } from '@angular/core';
import { PropertiesBackendService } from './properties-backend.service';
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPropertiesBackendService extends PropertiesBackendService {

  private addPropertyUrl:string="api/property/addproperty";
  private getPropertyUrl:string="api/property/getproperty?propertyId=";
  private getPropertiesUrl:string="api/property/getproperties";
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

  addProperty(newProperty: import("../models/property").Property): import("rxjs").Observable<number> {
    return this.http.post(this.addPropertyUrl,JSON.stringify(newProperty),this.jsonContentOptions)
    .map(response=>response.json() as number)
  }
  getProperty(id: number): import("rxjs").Observable<import("../models/property").Property> {
    return this.http.get(this.getPropertyUrl+id ,this.jsonContentOptions)
    .map(response=>response.json())
  }
  getProperties(): import("rxjs").Observable<import("../models/property").Property[]> {
    return this.http.get(this.getPropertiesUrl ,this.jsonContentOptions)
    .map(response=>response.json())
  }
  updateProperty(updatedProperty: import("../models/property").Property): import("rxjs").Observable<number> {
    return this.http.post(this.updatePropertyUrl,JSON.stringify(updatedProperty),this.jsonContentOptions)
    .map(response=>response.json() as number)
  }
  deleteProperty(id: number): import("rxjs").Observable<number> {
    return this.http.delete(this.deletePropertyUrl+id ,this.jsonContentOptions)
    .map(response=>response.json())
  }
}
