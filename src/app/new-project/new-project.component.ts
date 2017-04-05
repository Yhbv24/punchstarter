import { Component, OnInit } from '@angular/core';
import { Invention } from '../invention.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { InventionService } from '../invention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [InventionService]
})
export class NewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
