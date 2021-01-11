import { Component, OnInit } from '@angular/core';
import { TablService } from '../tabl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  test1=this.test.testGlobal;

  constructor(private test:TablService) { }
  

  ngOnInit() {
  
    
  }
  
}
