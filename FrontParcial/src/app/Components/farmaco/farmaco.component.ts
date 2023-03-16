import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmaco',
  templateUrl: './farmaco.component.html',
  styleUrls: ['./farmaco.component.css']
})
export class FarmacoComponent implements OnInit {
  
  constructor(public api:ApiService){}

  ngOnInit(): void {
      var response=this.api.getAll("Farmacos")
      console.log(response)
  }


}
