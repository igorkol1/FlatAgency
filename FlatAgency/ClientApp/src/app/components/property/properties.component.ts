import { Component, OnInit } from '@angular/core';
import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private propertiesService:PropertyService) { }

  test = "Test Properties component"

  ngOnInit() {
    this.propertiesService.getProperties().subscribe(
      props => console.log("Properties: "+props),
      error => console.log("Error: "+error)
    )
  }

}
