import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { ListCategorieComponent } from './components/product-categories/list-categorie/list-categorie.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageTemplatesComponent } from './components/manage-templates/manage-templates.component';
import { ManageReportsComponent } from './components/manage-reports/manage-reports.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PushNotificationsComponent } from './components/push-notifications/push-notifications.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { AuthServiceService } from './services/auth-service.service';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { provideClientHydration } from '@angular/platform-browser';
const routes: Routes = [
  {
    path : "login",component:LoginComponent
  },
 

    {
  path:"change-password", component:ChangePasswordComponent,
   },
  {
    path:"dashboard",component:DashboardComponent,
   
  },
  {
    path:"sidemenu",component:SidemenuComponent,
    
  },
  {
    path:"list-categorie",component:ListCategorieComponent,
   
  },
  {
    path:"manage-users",component:ManageUsersComponent,
    
  },
  {
    path:"manage-orders",component:ManageOrdersComponent,
    

  },
  {
    path:"manage-templates",component:ManageTemplatesComponent,
  },
  {
    path:"manage-reports",component:ManageReportsComponent,
   
  },


{
  path:"terms-conditions",component:PrivacyPolicyComponent,
},
{
  path:"privacy-policy",component:PrivacyPolicyComponent,
  
},
{
  path:"push-notifications",component:PushNotificationsComponent,
  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,DashboardComponent,
  SidemenuComponent,ManageUsersComponent,
  ManageOrdersComponent,PushNotificationsComponent,PrivacyPolicyComponent,
  ManageOrdersComponent,ManageReportsComponent,ManageTemplatesComponent,
  LayoutComponent
]