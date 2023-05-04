import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-farmaco',
  templateUrl: './form-farmaco.component.html',
  styleUrls: ['./form-farmaco.component.css']
})
export class FormFarmacoComponent implements OnInit {
  ngOnInit(): void {
    
  }

  farmacoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    valor: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
  
    
    
  });

  onSubmit(): void {
    let nombre = this.farmacoForm.controls["nombre"].value;
    let valor = this.farmacoForm.controls["valor"].value
    let tipo = this.farmacoForm.controls["tipo"].value     
    

    if(this.farmacoForm.valid) {
      
        Swal.fire('Felicidades','Has ingresado un cliente con éxito','success');
        
      } else {

        Swal.fire('Algo ha fallado','Revise las datos y vuelva a intentar','error');
      
      }
    
  }  
}
