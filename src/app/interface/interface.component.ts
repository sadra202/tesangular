import { Component, OnInit } from '@angular/core';
import { TablService } from '../tabl.service';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor(private tes:TablService) {
    
   }

  ngOnInit() {
  }
  t(i){
    console.log(i);
    console.log(this.tes.tabart[i].article);
    
    var doc  =  new  jsPDF ( ) ;//pour telecharfger input tex en forme pdf

    doc.text(this.tes.tabart[i].article,10,10);
    doc.save("output.pdf");
     
    
  }

}
