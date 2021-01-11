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
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }

}

@Component({
  selector: 'app-ac1',
  templateUrl: './ac1.component.html',
  styleUrls: ['./ac1.component.css']
})
export class Ac1Component implements OnInit {
   type='';
  //h
  highcharts = Highcharts;
   chartOptions = {   
      chart: {
         type: "area"
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle : {
        text: 'Source: Wikipedia.org'
      },
      xAxis:{
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
           enabled: false
        }
      },
      yAxis : {
        title: {
           text: 'Billions'
        },
        labels: {
           formatter: function () {
              return this.value / 1000;
           }
        }
      },
      tooltip : {
        shared: true,
        valueSuffix: ' millions'
      },
      plotOptions : {
        area: {
           stacking: 'percent',
           lineColor: '#666666',
           lineWidth: 1,
           
           marker: {
              lineWidth: 1,
              lineColor: '#666666'
           }
        }
      },
      credits:{
        enabled: false
      },
      series: [
         {
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
         }, 
         {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
         }, 
         {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
         }, 
         {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
         }, 
         {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
         }
      ]
   };
  //fh
  matcher = new MyErrorStateMatcher();t
  matchemail = new MyErrorStateMatcher();
  user= new FormGroup({
     sex: new FormControl(this.type,Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
      pas: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/
      )]),
      cpas: new FormControl(''),
      dia: new FormArray([])
      
      
      
  },{validators: [this.vlPssCpss,this.vlPssCps]})

  constructor() { }

  ngOnInit() {
  }
  onSumbit(us:FormGroup){
   
    
    
    us=this.user;
    console.log(us);
    
    
    
    console.log(this.user.value);


    

    
  }
   
  vlPssCpss(user: FormGroup){
    const pass = user.get('pas').value;
    const cpass =user.get('cpas').value;
    return pass ===  cpass ? null : { obj: true };
    

    }
    vlPssCps(user: FormGroup){
      const email = user.get('email').value;
      const emmail="habib@hotmail.fr"
   
      return email  != emmail  ? null : { obj1: true };
      
  
      }
  

}
