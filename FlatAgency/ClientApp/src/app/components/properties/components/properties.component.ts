import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(
    private propertiesService: PropertyService,
    private router: Router
  ) { }

  properties: Array<Property> = new Array<Property>();
  pageTitle: string = "List of flats";
  tempInfo: string = "Loading..."

  ngOnInit() {
    this.downloadProperties()
  }

  downloadProperties(): void {
    this.propertiesService.getProperties().subscribe(
      propertiesFromDb => {
        if (propertiesFromDb.length == 0) {
          this.tempInfo = "Records not found"
        } else {
          this.properties = propertiesFromDb;
        }
      },
      error => console.log(error)
    )
  }

  getProperty(id: number): void {
    this.router.navigate(['./properties/property-details', id]);
  }

  updateProperty(id: number): void {
    this.router.navigate(['./properties/property-update', id]);
  }

  deleteProperty(id: number): void {
    this.propertiesService.deleteProperty(id).subscribe(
      onSuccess => {
        console.log(onSuccess);
        this.properties.splice(this.properties.findIndex(prop => prop.id == id), 1)
      },
      onError => console.log(onError)
    );
  }
}
