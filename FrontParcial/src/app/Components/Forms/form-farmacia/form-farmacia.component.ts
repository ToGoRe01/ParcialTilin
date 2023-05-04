import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-farmacia',
  templateUrl: './form-farmacia.component.html',
  styleUrls: ['./form-farmacia.component.css']
})
export class FormFarmaciaComponent implements OnInit {
  ngOnInit(): void {
    
  }

  farmaciaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    tel: new FormControl('',Validators.required),
    nit: new FormControl('',[Validators.required,Validators.minLength(9), Validators.maxLength(9)]),
    cajero: new FormControl('',Validators.required),
    
    
  });

  onSubmit(): void {
    let nombre = this.farmaciaForm.controls["nombre"].value;
    let tel = this.farmaciaForm.controls["tel"].value
    let nit = this.farmaciaForm.controls["nit"].value     
    let cajero = this.farmaciaForm.controls["cajero"].value;


    if(this.farmaciaForm.valid) {
      
        Swal.fire('Felicidades','Has ingresado un cliente con éxito','success');
        
      } else {

        Swal.fire('Algo ha fallado','Revise las datos y vuelva a intentar','error');
      
      }
    
  }  
}
