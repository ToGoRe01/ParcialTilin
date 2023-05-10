import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  login:boolean;

  constructor(public http:HttpClient) {}

  url = "https://localhost:7256/api/";
  async getAll(Controller:string){
    var response:any;
    await this.http.get(this.url+Controller).toPromise().then(res=>{

      response=res

      }
      
    )

    return response;
    
  }

  async getLogin(Controller:string, Nit:string){
    var response:any;
    await this.http.get(this.url+Controller+"/nit/"+Nit).toPromise().then(res => {
      
      response=res
      
    }).catch(err => {
      console.error('Ocurrió un error al obtener información de inicio de sesión de la farmacia', err);
      return throwError('Algo salió mal');
    });
    
    return response;

  }
}


