import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import Axios from 'axios';


@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.css']
})
export class ManageReportsComponent {


  tooltip: string = '';
  left: number = 0;
  top: number = 0;
  data:any = [];
//   data =
//   [
//    {
//       "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//       "ReportedBy":"Bussiness Name",
//       "ReporteeName":"Bussiness Name",
//       "ReportedOn":"08/05/2023",
    
//    },
//    {
//     "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//     "ReportedBy":"Bussiness Name",
//     "ReporteeName":"Bussiness Name",
//     "ReportedOn":"08/05/2023",
  
//  },
//  {
//   "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   "ReportedBy":"Bussiness Name",
//   "ReporteeName":"Bussiness Name",
//   "ReportedOn":"08/05/2023",

// },
// {
//   "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   "ReportedBy":"Bussiness Name",
//   "ReporteeName":"Bussiness Name",
//   "ReportedOn":"08/05/2023",

// },
// {
//   "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   "ReportedBy":"Bussiness Name",
//   "ReporteeName":"Bussiness Name",
//   "ReportedOn":"08/05/2023",

// },
// {
//   "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   "ReportedBy":"Bussiness Name",
//   "ReporteeName":"Bussiness Name",
//   "ReportedOn":"08/05/2023",

// },
// {
//   "ReportDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   "ReportedBy":"Bussiness Name",
//   "ReporteeName":"Bussiness Name",
//   "ReportedOn":"08/05/2023",

// },
//   ]

constructor(private router: Router,private arouter:ActivatedRoute){
  this.getReportList();
 }

 getReportList() {
  Axios.get(AppUrls._baseUrl + actionUrl._reportList,{
    headers: {
      'x-auth' : ''

    },
  })
    .then(data => {
      console.log(data) 
      let deatils = data.data
      if(deatils.code == 200 && deatils.status == 'success') {
        this.data = deatils.response;
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

}
