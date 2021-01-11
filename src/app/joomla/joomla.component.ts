import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { TablService } from '../tabl.service';


@Component({
  selector: 'app-joomla',
  templateUrl: './joomla.component.html',
  styleUrls: ['./joomla.component.css']
})
export class JoomlaComponent implements OnInit {
  
  index=this.route.snapshot.paramMap.get('id');
  index1=this.tb.tabart.findIndex(element=>element.titre==this.tb.tabjf[this.index].titre&&element.article==this.tb.tabjf[this.index].article)
  type=this.tb.tabjf[this.index].type;
  titre=this.tb.tabjf[this.index].titre;
  article=this.tb.tabjf[this.index].article;
  dat=Date();
  artmod:any;


  

  constructor(private route:ActivatedRoute,private tb:TablService,private rot:Router) { }

  ngOnInit() {

  }
  mod(){
    console.log(this.index);
    console.log(this.index1);
    
    console.log(this.tb.tabjf);
    
    
    this.artmod={
      
  titre:this.titre,
  type:this.type,
  date:this.dat,
  article:this.article,
  nvue:this.tb.tabjf[this.index].nvue,
  auteur:JSON.parse(localStorage.getItem('user'))
    }
    
    
    
     
    this.tb.tabjf.splice(this.index,1,this.artmod);
    this.tb.tabart.splice(this.index1,1,this.artmod);
    console.log(this.index1);
    
    localStorage.setItem('art',JSON.stringify(this.tb.tabart));
  
    
    
    
     
   this.rot.navigate(['/profil']);
 

  }
  sup(){
    this.tb.tabjf.splice(this.index,1);
    //this.index2=this.tabars.findIndex(element=>element.titre==this.tab[this.index].titre&&element.text==this.tab[this.index].text)
    this.tb.tabart.splice(this.index1,1);
    localStorage.setItem('art',JSON.stringify(this.tb.tabart));
    this.rot.navigate(['/profil']);


  }


}
