import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(public _sharedata:SharedServiceService, private _router: Router) {
 
     }
}
