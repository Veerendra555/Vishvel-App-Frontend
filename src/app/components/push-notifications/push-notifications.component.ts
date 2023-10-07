import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import Axios from 'axios';
import { AppUrls, actionUrl } from 'src/environments/app-urls';
declare const $:any;

@Component({
  selector: 'app-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.css']
})
export class PushNotificationsComponent {
  service:any={}
  image:any;
  constructor(  private  router: Router,
    private arouter : ActivatedRoute,
    public snackBar: MatSnackBar) {
    }


  selectImage(event) {
    console.log(event)
    if (event.target.files.length > 0) {
      if(event.target.files[0].size < 3222088)
      {  
      const file = event.target.files[0];
      this.image = file;
      }
      else
     {
      this.openSnackBar('Please Upload Image Below 3MB','5000','close');
      $('input[type=file]').val('');
     }

    }
  }
  
  
  formSubmit(form:NgForm)
  {

    const formData = new FormData();
    console.log(this.service);
    console.log(this.image);
    formData.append('userid', '64fc8a6c62f11bf22078cae7');
    formData.append('title', this.service.title);
    formData.append('description', this.service.description);
    formData.append('image', this.image);
     console.log(formData);
        Axios.post(AppUrls._baseUrl + actionUrl._addPushNotification,formData,{
      headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE1MmJmOGYyMTc3MjIwMDRmYTBjYTgiLCJtb2Jfbm8iOiI5MTAwNDkyOTQ0IiwiaWF0IjoxNjk2NjE4NjY3LCJleHAiOjE3MjgxNzYyNjd9.N9TMgc9h9ayhymEkseGa4iB7zkYAvk7azf4pjxJIG_U'

      },
    })
      .then(response => {        
        console.log(response)
        if (response.data.isSuccess) {
          this.openSnackBar(response.data.message,'5000','close');
           form.resetForm("");
        }
        else
        {
          this.openSnackBar(response.data.message,'5000','close');
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  openSnackBar(msg, duration, action?) {
    this.snackBar.open(msg, action, {
      duration: duration,
    });
  }

  ngOnInit(): void {
  }
}