import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);
  }

  increment() {
    this.dataService.setNewState();
  }

}
