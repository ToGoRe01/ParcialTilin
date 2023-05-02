import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    await this.http.get(this.url+Controller+"/"+Nit).toPromise().then(res=>{

      response=res

      }
      
    )

    return response;
    
  }


}


