import { Injectable } from '@angular/core';
import { AddresesBackendService } from './addreses-backend.service';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Address } from '../models/address';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpAddressesBackendService extends AddresesBackendService {

  private addAddressUrl: string = "api/addresses/addaddress";
  private getAddressesUrl: string = "api/addresses/getaddresses";
  private updateAddresUrl: string = "api/addresses/updateaddress";
  private getAddressUrl: string = "api/addresses/getaddress?addressId=";

  private jsonContentOptions: RequestOptions;

  constructor(private http: Http) {
    super();
    let headersJson: Headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.jsonContentOptions = new RequestOptions({ headers: headersJson })
  }

  addAddress(newAddress: Address): Observable<number> {
    return this.http.post(this.addAddressUrl, JSON.stringify(newAddress), this.jsonContentOptions).pipe(map(response => response.json() as number));
  }
  getAddress(id: number): Observable<Address> {
    return this.http.get(this.getAddressUrl + id, this.jsonContentOptions).pipe(map(response => response.json()));
  }
  getAddreses(): Observable<Address[]> {
    return this.http.get(this.getAddressesUrl, this.jsonContentOptions).pipe(map(response => response.json()));
  }
  updateAddress(updatedAddress: Address): Observable<number> {
    return this.http.post(this.updateAddresUrl, JSON.stringify(updatedAddress), this.jsonContentOptions).pipe(map(response => response.json() as number));
  }
  deleteAddress(id: number): Observable<number> {
    throw new Error("Method not implemented.");
  }

}
