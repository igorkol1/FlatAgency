import { Injectable } from '@angular/core';
import { OwnersBackendService } from 'src/app/services/owners-backend.service';
import { Owner } from 'src/app/models/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private ownersBackendService: OwnersBackendService) { }

  addOwner(newOwner:Owner):Observable<number>{
    return this.ownersBackendService.addOwner(newOwner)
  }

  getOwner(id:number):Observable<Owner>{
    return this.ownersBackendService.getOwner(id);
  }

  getOwners():Observable<Owner[]>{
    return this.ownersBackendService.getOwners();
  }

  updateProperty(updatedOwner:Owner):Observable<number>{
    return this.ownersBackendService.updateOwner(updatedOwner);
  }

  deleteProperty(id:number):Observable<number>{
    return this.ownersBackendService.deleteOwner(id);
  }
}
