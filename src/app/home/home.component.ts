import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data = []

  constructor(private _getDataService:GetDataService) { }

  hideItem(itemID){
    let element = document.getElementById(itemID)
    element.parentNode.removeChild(element);
  }

  ngOnInit() {
    
    this._getDataService.getData()
    .subscribe(data => this.data = data )
    
  }

}
