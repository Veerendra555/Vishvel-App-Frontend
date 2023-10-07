import { Component } from '@angular/core';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import Axios from 'axios';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-manage-templates',
  templateUrl: './manage-templates.component.html',
  styleUrls: ['./manage-templates.component.css']
})
export class ManageTemplatesComponent {
  // templateData: any;
  // flag:boolean = true;
  // dtTrigger: any; 
  // getTemplates() {
  //   Axios.get(AppUrls._baseUrl + actionUrl._manageUsers,{
  //     params:{
  //       role:"Admin"
  //     }
  //    })
  //     .then(response => { 
  //       if(response.data.code == 200 && response.data.type == 'success') {
  //         this.templateData = response.data.data;
  //         console.log(this.templateData);
  //         console.log(response.data);
  //         if(this.flag)
  //         {
  //           this.dtTrigger.next();
  //           this.flag=false;
  //         }
  //       }
  //       // else if(this.baseService.checkToken(response.data.message , response.data.status))
  //       // {
          
  //       // }
  //        })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }
  
}
