import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablService {
users=JSON.parse( localStorage.getItem('users')) ||[];
tabart=JSON.parse( localStorage.getItem('art')) ||[];
user=JSON.parse( localStorage.getItem('user')); 
tabjf=this.tabart.filter(element=>element.auteur.email ==this.user.email);


  testGlobal=true;

  constructor() { }
  add(us:any){
    this.users.push(us);
  }
}
