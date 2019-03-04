import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from 'src/app/common/base/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OwnersService } from '../../services/owners.service';
import { Owner } from 'src/app/models/owner';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.css']
})
export class NewOwnerComponent extends BaseComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private ownersService: OwnersService
  ) {
    super(activatedRoute, location);
  }

  owner:Owner;
  pageTitle = "Owner data";
  urlParam:number;

  isInOwnerDetailsMode:boolean=false;

  @Input() receivdId:number;
  @Output() ownerAddedEvent:EventEmitter<number>=new EventEmitter<number>();

  ngOnInit() {
    this.detectUrlParam();
    this.owner = new Owner();
    this.messages = new Array<Message>();
    if(this.location.isCurrentPathEqualTo("/properties/new-property")){
      this.pageTitle = "New owner";
    }else if(this.location.isCurrentPathEqualTo("/properties/property-update/"+this.urlParam)){
      this.downloadOwner(this.receivdId);
      this.isInEditMode = true;
    }else if(this.location.isCurrentPathEqualTo("/owners/owner-details/"+this.urlParam)){
      this.downloadOwner(this.receivdId);
      this.isInOwnerDetailsMode = true;
      this.isInEditMode = false;
    }else if(this.location.isCurrentPathEqualTo("/owners/owner-update/"+this.urlParam)){
      this.downloadOwner(this.receivdId);
      this.isInOwnerDetailsMode = true;
      this.isInEditMode = true;
    }
  }

  onSubmit(newOwner:Owner):void{
    if(this.location.isCurrentPathEqualTo("/properties/property-update/"+this.urlParam)||
    (this.location.isCurrentPathEqualTo("/owners/owner-update/"+this.urlParam))){
      this.ownersService.updateProperty(newOwner).subscribe(
        id => {
          this.showMessage(true, 'succes', 'Confirmation', true, 'Owner has been updated')
          this.ownerAddedEvent.emit(id)
        },
        error => this.showMessage(true, 'warn', 'Information', false, error)
      )
    }else{
      this.ownersService.addOwner(newOwner).subscribe(
        id => {
          this.showMessage(true, 'succes', 'Confirmation', true, 'Owner has been added')
          this.ownerAddedEvent.emit(id)
        },
        error => this.showMessage(true, 'warn', 'Information', false, error)
      )
    }
  }

  detectUrlParam():void{
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.urlParam = params['id'];
    })
  }
  
  downloadOwner(id:number):void{
    this.ownersService.getOwner(id).subscribe(
      ownerFromDb => this.owner = ownerFromDb,
      error => this.showMessage(true, 'warn', 'Information', false, error)
    )
  }

  
}
