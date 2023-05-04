import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit{
  ngOnInit(): void {
    
  }

  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    tipoid: new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(2)]),
    registro: new FormControl('',Validators.required),
    tipoc: new FormControl('',Validators.required),
    
  });

  onSubmit(): void {
    let nombre = this.clienteForm.controls["nombre"].value;
    let tipoid = this.clienteForm.controls["tipoid"].value
    let registro = this.clienteForm.controls["registro"].value     
    let tipoc = this.clienteForm.controls["tipoc"].value;


    if(this.clienteForm.valid) {
      
        Swal.fire('Felicidades','Has ingresado un cliente con éxito','success');
        
      } else {

        Swal.fire('Algo ha fallado','Revise las datos y vuelva a intentar','error');
      
      }
    
  }  

}
