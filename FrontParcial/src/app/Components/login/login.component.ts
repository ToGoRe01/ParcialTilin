import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

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
    if(this.loginForm.valid) {
      if(nit == "123456789" && cajero == "A123456") {
        Swal.fire('Felicidades','Ha ingresado con éxito','success');
        localStorage.setItem('login','si');
      } else {
        Swal.fire('Algo ha fallado','Revise las credenciales y vuelva a intentar','error');
        localStorage.setItem('login','no');
      }
    } else {
      Swal.fire('Datos incorrectos','Ingrese correctamente los campos','error');
      localStorage.setItem('login','no');
    }
    
  }

}
