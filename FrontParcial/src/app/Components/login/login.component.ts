import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data: Array<any>;
  login = this.api.login;
  loginForm: FormGroup;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(public formBuilder: FormBuilder, public api:ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nit: ['', [Validators.required]],
      cajero: ['', [Validators.required]]
    });
    
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    
    const nit = this.loginForm.get('nit').value;
    const cajero = this.loginForm.get('cajero').value;

    // Envía los datos de inicio de sesión al servidor
    if (this.api.getLogin("Farmacias", nit)){
      
        console.log(this.api.getLogin("Farmacias", nit)); // Maneja la respuesta del servidor
        this.data = await this.api.getLogin("Farmacias", nit);
        console.log(Object.keys(this.data[0]));

    }else{
      
        console.log("Error"); // Maneja el error en caso de que falle la solicitud
      
    }
    
  }

}
