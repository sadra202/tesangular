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
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }

}


@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {
  a="kikk"
  type='';
  em='';
 emaill='';
 pasl='';
  testl=false;
  testp=true;



  hidden = false;
  matcher = new MyErrorStateMatcher();
  matchemail = new MyErrorStateMatcher();
  
  user= new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl(this.em,[Validators.required,Validators.email]),
      pas: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/
      )]),
      cpas: new FormControl(''),
      dia: new FormArray([])
      
      
      
  },{validators: [this.vlPssCpss,this.vlPssCps]})


 // toggleBadgeVisibility() {
  ////  this.hidden = !this.hidden;
 // }

  constructor(private tab:TablService , private route:Router) { }

  ngOnInit() {
   
    
     
    
  }
  vlPssCpss(user: FormGroup){
    const pass = user.get('pas').value;
    const cpass =user.get('cpas').value;
    return pass ===  cpass ? null : { obj: true };
    

    }
    vlPssCps(user: FormGroup){
    const email = user.get('email').value;
      const tab= JSON.parse(localStorage.getItem('users'));
      const testv=tab.some(element=>element.email==email);
        
      
   
      return !testv  ? null : { obj1: true };
      
  
      }
      onSumbit(us:FormGroup){
        us=this.user.value;
        this.tab.add(us);
        localStorage.setItem('users',JSON.stringify(this.tab.users));


        

        
      //  this.route.navigate(['/profil' ]);
        
        
        
    

      }
      login(){
      var tes= this.tab.users.some(element=>element.email==this.emaill && element.pas==this.pasl)
      var user1:any;

      if(tes==true){
        this.testl=false;
        
        user1=this.tab.users.find(element=>element.email==this.emaill &&element.pas==this.pasl);
        localStorage.setItem('user',JSON.stringify(user1));
        this.tab.testGlobal=false;
        console.log(this.tab.user);
        
        this.tab.tabjf=this.tab.tabart.filter(element=>element.auteur.email ==user1.email);
        console.log(this.tab.tabjf);
        

       
        this.route.navigate(['/profil']);
     

        
      }
      else{
        this.testl=true;
        this.emaill='';
        this.pasl='';
      }
        
        

      }
      inter(){
        this.tab.testGlobal=false;
        this.route.navigate(['/interface'])
        
      }


}
