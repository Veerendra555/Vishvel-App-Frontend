import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent {
  model: NgbDateStruct;
  flag:boolean=true;
  dtTrigger: Subject<any> = new Subject<any>();
  store:any={}
  warningStatus:boolean=false;
  categoriesData: any;
  closeResult = '';
  selectedObj:any = {};
  displayCount:any;

  public data =
  [
    {
      "Name":"All Categories"
      },
      {
      "Name":"Mobile Accessories"
        },
        {
      "Name":"eCommerce"
          },
          {
      "Name":"Hospitality"
            },
            {
              "Name":"Sports"
              },
              {
              "Name":"Fitness"
                },
                {
              "Name":"Electronics"
                  },
                  {
              "Name":"Others"
                    }
  ];

}

