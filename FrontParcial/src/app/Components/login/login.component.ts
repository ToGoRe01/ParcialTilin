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
  loginForm: FormGroup;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(public formBuilder: FormBuilder, public api:ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nit: ['', [Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
      cajero: ['', [Validators.required]]
    });
    
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    
    const nit = this.loginForm.get('nit').value;
    const cajero = this.loginForm.get('cajero').value;
    this.data = await this.api.getLogin("Farmacias", nit);
    let llaves = Object.values(this.data);
    const nitCopm:String = llaves[3];
    const cajCopm:String = llaves[4];

    // Envía los datos de inicio de sesión al servidor
    if(this.loginForm.valid) {
      if(nit == nitCopm && cajero == cajCopm) {
        Swal.fire('Felicidades','Ha ingresado con éxito','success');
        localStorage.setItem('login','si');
        setTimeout(() => {
          location.reload();
        }, 2000);
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
