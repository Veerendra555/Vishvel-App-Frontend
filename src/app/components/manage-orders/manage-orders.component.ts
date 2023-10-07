import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
 
  getColor(status) {
    switch (status) {
      case 'Pending Approval':
        return 'orange';
      case 'Delivered':
        return 'green';
      case 'Cancelled':
        return 'red';
        case 'Out for Delivery':
          return 'blue';
  
    }
  }
  public data =
  [
   {
      "id":"#023456",
      "OrderedBy":"Bussiness Name",
      "OrderedTo":"Bussiness Name",
      "OrderedOn":"08/05/2023",
      "OrderStatus":"Pending Approval"
   },
   {
    "id":"#023456",
    "OrderedBy":"Bussiness Name",
    "OrderedTo":"Bussiness Name",
    "OrderedOn":"08/05/2023",
    "OrderStatus":"Delivered"
 },
 {
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Cancelled"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Delivered"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Delivered"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Out for Delivery"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Pending Approval"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Out for Delivery"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Delivered"
},
{
  "id":"#023456",
  "OrderedBy":"Bussiness Name",
  "OrderedTo":"Bussiness Name",
  "OrderedOn":"08/05/2023",
  "OrderStatus":"Cancelled"
},
  ];
  

}
