import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators,FormGroupDirective,NgForm, FormArray  } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as Highcharts from 'highcharts';
import { TablService } from '../tabl.service';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  type=''
  dat=Date();
  vue=0;
  user=JSON.parse( localStorage.getItem('user'));
  
  
  
  
  


art= new FormGroup({
  titre:new FormControl('',Validators.required),
  type:new FormControl(''),
  date:new FormControl(this.dat),
  article:new FormControl('',Validators.required),
  nvue:new FormControl(this.vue),
  auteur:new FormControl(JSON.parse(localStorage.getItem('user')))

})
  constructor(private tes:TablService, private route:Router) { }

  ngOnInit() {
       var a=3
       var b=a
       a=7
       console.log(b);
       
    
  
  
          
  }
 ac(){
   this.tes.testGlobal=false;
   this.route.navigate(['/interface'])

 }
 onSumbit(){
  
   this.tes.tabart.push(this.art.value);
   localStorage.setItem('art',JSON.stringify(this.tes.tabart));
   this.tes.tabjf=this.tes.tabart.filter(element=>element.auteur.email ==this.user.email)
   
   console.log(this.tes.tabart);
  

  

   
  
   

   
   
 }
 
 mod(i){
  
     this.route.navigate(['/joomla',i]);
     

}
a(){
  console.log(this.tes.tabjf);
  
}

}
