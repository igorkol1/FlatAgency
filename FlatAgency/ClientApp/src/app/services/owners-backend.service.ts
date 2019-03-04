import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export abstract class OwnersBackendService {
  abstract addOwner(newOwner: Owner): Observable<number>;

  abstract getOwner(id: number): Observable<Owner>;

  abstract getOwners(): Observable<Owner[]>;

  abstract updateOwner(updatedProperty: Owner): Observable<number>;

  abstract deleteOwner(id: number): Observable<number>;
}
