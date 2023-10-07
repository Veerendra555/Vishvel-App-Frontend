import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import Axios from 'axios';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({

  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  name: string="";
  showPopup:any = false;
  dataShown:any =false;
tandcData:any;
flag:boolean = true;
editBtnStatus:boolean = false;
constructor(private router: Router) { 
   
    this.name = this.router.url == '/terms-conditions' ? "Terms And Conditions" : "Privacy Policy"
    
  }
toggleData():void{
  this.dataShown = !this.dataShown;
}
  
// openXl(content) {
//   console.log(content);
//   console.log("-----------FIRST masterData--------------");
//  //  const originalData = this.masterData[index].productDetails;

//  //  console.log(originalData);
//  //  const originalData = this.masterData[index].productDetails; 
//  //  console.log("First originalData===>",originalData)
//    this.showPopup = false;
  
  
  
    
//      if(this.editBtnStatus)
//      {
//      Axios.put(AppUrls._baseUrl + actionUrl._gettandc,)
//      .then(response => { 
//        if (response.data.code == 200 && response.data.type == 'success') {
//          this.editBtnStatus = false;
//          localStorage.removeItem("currentProduct");
//            this.openSnackBar(response.data.message,'5000','close');
//          // location.reload();
//          //  this.cartProductData = response.data.data;
//          //  this.getCartByUserId()
//          // this.getOrder();
//        }
//         })
//      .catch(function (error) {
//        console.log(error)
//      })
//     }
   
//   }

//   getData(){
//     Axios.get(AppUrls._baseUrl + actionUrl._gettandc,{
//       headers: {
//         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBlNzhiNWI2NTA2ZTM3NTk0ZThiNzkiLCJtb2Jfbm8iOiI5MTAwNDkyOTQ0IiwiaWF0IjoxNjk1NDQ3MjQ3LCJleHAiOjE3MjcwMDQ4NDd9.z0ECqoYaRnqMjYODfinyKyXt4KbrST0lzQ1cgsuNYuk'
//       },
//     })
//       .then(response => { 
//         if (response.data.code == 200 && response.data.type == 'success') {
//           // this.member = response.data.data;
//           // console.log(this.member);
//           console.log(response.data);
//         }
//         // else if(this.baseService.checkToken(response.data.message , response.data.status))
//         // {
          
//         // }
//          })
//       .catch(function (error) {
//         console.log(error)
//       })
//   }

//   openSnackBar(msg, duration, action?) {
//     this.snackBar.open(msg, action, {
//       duration: duration,
//     });
//   }
  }
