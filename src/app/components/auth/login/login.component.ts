import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Axios from 'axios';
import { HttpService } from 'src/app/services/http.service';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
// constructor( private _http: HttpService,
//   private authService:AuthServiceService,
//   private  router: Router,
//   public snackBar:MatSnackBar){

// }
submitted = false;
  // adminLogin(){
  //   // this.router.navigate(['/dashboard']);
  //   this.submitted = true;
 
  //     // this.authService.signinUser(this.email.value, this.password.value);
  //         Axios.post(AppUrls._baseUrl + actionUrl._loginUser, {
  //           //  role:this.loginForm.get("role").value,
    
  //       })    
  //         .then(response => {
  //           console.log(response);
  //           if (response.data.code == 200 && response.data.type == "success") 
  //           {
  //               console.log("success block")
  //               console.log(response.data.token)
  //               console.log(response.data.data)
  //             localStorage.setItem('bulkiTradeToken', response.data.token);
  //             localStorage.setItem('userData', JSON.stringify(response.data.data));
  //             this.authService.update();
  //            this.router.navigate(['/dashboard']);
  //            this.submitted=false;
  //           //  this.loginForm.reset();
  //           } 
  //           else
  //           {
  //             console.log("Error block")
  //             this.openSnackBar(response.data.message,'5000','close');
  //             // this.msg=response.data.message;
  //           }
  //         })
  //         .catch(function (error) {
  //           console.log(error)
  //         })
  
  //   }
  

  // onSubmit(): void {
  //   console.log(JSON.stringify(this.form, null, 2));
  // }

  // onReset(form: NgForm): void {
  //   form.reset();
  // }
  ngOnInit() {
   
  }

  // openSnackBar(msg, duration, action?) {

  //   this.snackBar.open(msg, action, {
  //     duration: duration,
  //   });
  // }



}
