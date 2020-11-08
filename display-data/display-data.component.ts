import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  li:any; 
  lis=[];
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://nmflightapi.azurewebsites.net/api/flight') 
    .subscribe(Response => { 
  
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.list; 
    });
  }

}
