import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import Axios from 'axios';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  
  block:boolean=true;
userData:any;
flag:boolean=true;
itemsPerPage:number = 2;
page:number =1;
total: number;
  constructor(private router: Router,private arouter:ActivatedRoute,private modalService: NgbModal){
   this.getUsers();
  }
  //////Get Data
  
  getUsers() {
    Axios.get(AppUrls._baseUrl + actionUrl._usersList+`?itemsPerPage=${this.itemsPerPage}&pageNumber=${this.page}`,{
      headers: {
        'x-auth' : ''

      },
    })
      .then(data => {
        console.log(data) 
        let deatils = data.data
        if(deatils.code == 200 && deatils.status == 'success') {
          this.userData = deatils.response.data;
          this.total = deatils.response.total;
          console.log(this.userData);
          console.log(deatils);
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }

  pageChange(data){
   console.log("Data",data);
   this.page = data;
   this.getUsers();
  }
  
  // public data =
  // [
  //   {
  //     "Name":"Aravind Kumar",
  //     "Mobile":9832736281,
  //     "Email":"aravind@gmail.com",
  //     "Company":"Aravind Services Pvt Ltd",
  //     "Address":"Kukatpally"
  //     },
  //     {
  //       "Name":"Aravind Kumar",
  //       "Mobile":9832736281,
  //       "Email":"aravind@gmail.com",
  //       "Company":"Aravind Services Pvt Ltd",
  //       "Address":"Kukatpally"
  //       },
  //       {
  //         "Name":"Aravind Kumar",
  //         "Mobile":9832736281,
  //         "Email":"aravind@gmail.com",
  //         "Company":"Aravind Services Pvt Ltd",
  //         "Address":"Kukatpally"
  //         },
  //         {
  //           "Name":"Aravind Kumar",
  //           "Mobile":9832736281,
  //           "Email":"aravind@gmail.com",
  //           "Company":"Aravind Services Pvt Ltd",
  //           "Address":"Kukatpally"
  //           },
  //           {
  //             "Name":"Aravind Kumar",
  //             "Mobile":9832736281,
  //             "Email":"aravind@gmail.com",
  //             "Company":"Aravind Services Pvt Ltd",
  //             "Address":"Kukatpally"

  //             },
  //             {
  //               "Name":"Aravind Kumar",
  //               "Mobile":9832736281,
  //               "Email":"aravind@gmail.com",
  //               "Company":"Aravind Services Pvt Ltd",
  //               "Address":"Kukatpally"
  
  //               },
  //               {
  //                 "Name":"Aravind Kumar",
  //                 "Mobile":9832736281,
  //                 "Email":"aravind@gmail.com",
  //                 "Company":"Aravind Services Pvt Ltd",
  //                 "Address":"Kukatpally"
    
  //                 },
  //                 {
  //                   "Name":"Aravind Kumar",
  //                   "Mobile":9832736281,
  //                   "Email":"aravind@gmail.com",
  //                   "Company":"Aravind Services Pvt Ltd",
  //                   "Address":"Kukatpally"
      
  //                   },
  //                   {
  //                     "Name":"Aravind Kumar",
  //                     "Mobile":9832736281,
  //                     "Email":"aravind@gmail.com",
  //                     "Company":"Aravind Services Pvt Ltd",
  //                     "Address":"Kukatpally"
        
  //                     },
  //                     {
  //                       "Name":"Aravind Kumar",
  //                       "Mobile":9832736281,
  //                       "Email":"aravind@gmail.com",
  //                       "Company":"Aravind Services Pvt Ltd",
  //                       "Address":"Kukatpally"
          
  //                       },
     
                    
  // ];



  isBlock(){
    this.block = this.block ? false :true;
  }

}
