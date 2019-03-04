import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Property } from 'src/app/models/property';
import { BaseComponent } from 'src/app/common/base/base.component';
import { Address } from 'src/app/models/address';
import { Owner } from 'src/app/models/owner';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent extends BaseComponent implements OnInit {

  constructor(
    private propertiesService: PropertyService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    super(activatedRoute, location)
  }

  pageTitle: string;
  addressBtnTitle: string = "Show address";
  ownerBtnTitle: string = "Show owner";
  urlParam: number;

  address: Address = new Address();
  owner: Owner = new Owner();
  property: Property = new Property();

  isUpdatePage: boolean = false;
  isNewOwnerModeActivated: boolean = false;
  isNewAddressModeActivated: boolean = false;

  ownerAddedEvent(id: number): void {
    this.property.ownerId = id;
  }

  addressAddedEvent(id: number): void {
    this.property.addressId = id;
  }

  ngOnInit() {
    this.messages = new Array<Message>();
    this.detectUrlParam();
    if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
      this.pageTitle = "New Real Easte"
      this.ownerBtnTitle = "Add owner"
      this.addressBtnTitle = "Add location"
    } else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
      this.pageTitle = "Update Real Easte"
      this.ownerBtnTitle = "Update owner"
      this.addressBtnTitle = "Update location"
      this.downloadProperty();
    } else {
      this.pageTitle = "Real Easte Details"
      this.isInEditMode = false;
      this.downloadProperty();
    }
  }

  activateNewAddressMode(): void {
    this.isNewAddressModeActivated == true ? this.isNewAddressModeActivated = false : this.isNewAddressModeActivated = true;
  }

  activateNewOwnerMode(): void {
    this.isNewOwnerModeActivated == true ? this.isNewOwnerModeActivated = false : this.isNewOwnerModeActivated = true;
  }

  downloadProperty(): void {
    this.propertiesService.getProperty(this.urlParam).subscribe(
      propertyFromDb => this.property = propertyFromDb,
      error => this.showMessage(true, 'warn', 'Information', false, error)
    )
  }

  onSubmit(propObj: Property): void {
    if ((propObj.addressId == undefined || propObj.addressId < 0) || (propObj.ownerId == undefined || propObj.ownerId < 0)) {
      return this.showMessage(true, 'warn', 'Warning', false, 'Please add owner and location');
    }
    if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
      this.propertiesService.addProperty(propObj).subscribe(
        onSuccess => this.showMessage(true, 'succes', 'Confirmation', true, 'Property has been added'),
        error => this.showMessage(true, 'warn', 'Information', false, error)
      )
    } else {
      this.propertiesService.updateProperty(propObj).subscribe(
        onSuccess => this.showMessage(true, 'succes', 'Confirmation', true, 'Property has been updated'),
        error => this.showMessage(true, 'warn', 'Information', false, error)
      )
    }
  }

  detectUrlParam(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.urlParam = params['id'];
    })
  }

}
