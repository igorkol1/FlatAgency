import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(
    private router:Router,
    private propertiesService: PropertyService,
    private activatedRoute: ActivatedRoute,
    private location: Location
    ) { }

  pageTitle:string;
  urlParam: number;
  isInEditMode: boolean = true;
  property: Property = new Property();

  ngOnInit() {
    this.detectUrlParam();
    console.log(this.location.pathname);
    if(this.location.pathname.endsWith("/properties/new-property")){
      this.pageTitle = "New Real Easte"
    }else if(this.location.pathname.endsWith("/properties/property-update")){
      this.pageTitle = "Update Real Easte"
      this.downloadProperty();
    }else{
      this.pageTitle = "Real Easte Details"
      this.isInEditMode = false;
      this.downloadProperty();
    }
  }

  downloadProperty():void{
    this.propertiesService.getProperty(this.urlParam).subscribe(
      propertyFromDb => this.property = propertyFromDb,
      errorObj => console.log(errorObj)
    )
  }

  onSubmit(propObj:Property):void{
    if(this.location.pathname.endsWith("/properties/new-property")){
      propObj.addressId = 3;
      propObj.ownerId = 3;
      this.propertiesService.addProperty(propObj).subscribe(
        onSuccess => console.log(onSuccess),
        onError => console.log(onError)
      )
    }else{
      this.propertiesService.updateProperty(propObj).subscribe(
        onSuccess => console.log(onSuccess),
        onError => console.log(onError)
      )
    }
  }

  detectUrlParam():void{
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.urlParam = params['id'];
    })
  }

  goBack():void{
    this.router.navigateByUrl("/properties");
    //this.location.
  }
}
