import { Injectable } from '@angular/core';
import { PropertiesBackendService } from 'src/app/services/properties-backend.service';
import { Property } from 'src/app/models/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private propertiesBackendService: PropertiesBackendService) { }

  addProperty(newProperty:Property):Observable<number>{
    return this.propertiesBackendService.addProperty(newProperty);
  }

  getProperty(id:number):Observable<Property>{
    return this.propertiesBackendService.getProperty(id);
  }

  getProperties():Observable<Property[]>{
    return this.propertiesBackendService.getProperties();
  }

  updateProperty(updatedProperty:Property):Observable<number>{
    return this.propertiesBackendService.updateProperty(updatedProperty);
  }

  deleteProperty(id:number):Observable<number>{
    return this.deleteProperty(id);
  }
}
