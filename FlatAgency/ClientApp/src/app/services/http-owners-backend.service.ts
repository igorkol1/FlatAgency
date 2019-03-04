import { Injectable } from '@angular/core';
import { OwnersBackendService } from './owners-backend.service';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Owner } from '../models/owner';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpOwnersBackendService extends OwnersBackendService {

  private addOwnerUrl: string = "api/owners/addowner";
  private getOwnersUrl: string = "api/owners/getowners";
  private updateOwnerUrl: string = "api/owners/updateowner";
  private getOwnerUrl: string = "api/owners/getowner?ownerId=";

  private jsonContentOptions: RequestOptions;

  constructor(private http: Http) {
    super();
    let headersJson: Headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.jsonContentOptions = new RequestOptions({ headers: headersJson })
  }

  addOwner(newOwner: Owner): Observable<number> {
    return this.http.post(this.addOwnerUrl, JSON.stringify(newOwner), this.jsonContentOptions).pipe(map(response => response.json() as number));
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get(this.getOwnerUrl + id, this.jsonContentOptions).pipe(map(response => response.json()));
  }
  
  getOwners(): Observable<Owner[]> {
    return this.http.get(this.getOwnersUrl, this.jsonContentOptions).pipe(map(response => response.json()));
  }

  updateOwner(updatedProperty: Owner): Observable<number> {
    return this.http.post(this.updateOwnerUrl, JSON.stringify(updatedProperty), this.jsonContentOptions).pipe(map(response => response.json() as number));
  }

  deleteOwner(id: number): Observable<number> {
    throw new Error("Method not implemented.");
  }

}
