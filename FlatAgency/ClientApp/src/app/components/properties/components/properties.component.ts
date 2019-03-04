import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property';
import { ConfirmationService, Message } from 'primeng/primeng';
import { BaseComponent } from 'src/app/common/base/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  providers: [ConfirmationService]
})
export class PropertiesComponent extends BaseComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private propertiesService: PropertyService,
    private router: Router,
    private confiramtionService: ConfirmationService
  ) {
    super(activatedRoute, location);
  }

  properties: Array<Property> = new Array<Property>();
  pageTitle: string = "List of flats";

  ngOnInit() {
    this.messages = new Array<Message>();
    this.downloadProperties()
  }

  downloadProperties(): void {
    this.propertiesService.getProperties().subscribe(
      propertiesFromDb => this.properties = propertiesFromDb,
      error => this.showMessage(true, 'warn', 'Information', false, error)
    )
  }

  getProperty(id: number): void {
    this.router.navigate(['./properties/property-details', id]);
  }

  updateProperty(id: number): void {
    this.router.navigate(['./properties/property-update', id]);
  }

  deleteProperty(id: number): void {
    this.confiramtionService.confirm({
      message: 'Are you sure that you want to delete this property?',
      header: 'Confirmation',
      icon: 'fa-fa-question-circle',
      accept: () => {
        this.propertiesService.deleteProperty(id).subscribe(
          onSuccess => {
            this.showMessage(false, 'success', 'Confirmation', true, 'Property has been deleted successfully')
            this.properties.splice(this.properties.findIndex(prop => prop.id == id), 1)
          },
          error => this.showMessage(true, 'warn', 'Information', false, error)
        );
      },
      reject: () => {
        //TODO
      }
    })

  }
}
