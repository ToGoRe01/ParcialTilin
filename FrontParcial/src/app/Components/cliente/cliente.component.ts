import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  constructor(public api:ApiService){}

  ngOnInit(): void {
      var response=this.api.getAll("Clientes")
      console.log(response)
  }

}
