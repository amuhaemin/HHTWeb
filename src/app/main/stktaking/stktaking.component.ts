import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stktaking',
  templateUrl: './stktaking.component.html',
  styleUrls: ['./stktaking.component.css']
})
export class StktakingComponent implements OnInit {

  model: NgbDateStruct;
  @ViewChild('dp') dp: NgbDatepicker;
  
  constructor() { }

  ngOnInit(): void {
  }

}
