import { Injectable } from '@angular/core';
import { Address } from '../models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AddresesBackendService {

  abstract addAddress(newAddress: Address): Observable<number>;

  abstract getAddress(id: number): Observable<Address>;

  abstract getAddreses(): Observable<Address[]>;

  abstract updateAddress(updatedAddress: Address): Observable<number>;

  abstract deleteAddress(id: number): Observable<number>;
}
