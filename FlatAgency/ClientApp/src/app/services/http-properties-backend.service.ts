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
}
