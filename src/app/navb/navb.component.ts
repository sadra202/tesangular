import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.css']
})
export class NavbComponent implements OnInit {
 /* afuConfig = {
    uploadAPI: {
      url:"https://www.googleapis.com/upload/drive/v3/files?uploadType=media"
    }
};
*/
 a:any;
 b:any;
 s='';
 tab: Array<any> = ['1','5'];
 k:any;
   

 
   


  constructor() { }

  ngOnInit() {
  }
  ev(e){
    console.log(e.target.files[0]);
    this.k=e.target.files[0];
    console.log(this.k);
    

    

  }
  sss(){
    console.log(this.tab);
    console.log(this.a);
    
   var doc  =  new  jsPDF ( ) ;//pour telecharfger input tex en forme pdf

   doc.text(this.k,10,10);
   doc.save("output.pdf");
    
    
   
    
              
     
}
}


