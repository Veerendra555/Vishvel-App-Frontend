import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedServiceService } from './services/shared-service.service';
import { LoginComponent } from './components/auth/login/login.component';
import { AddCategorieComponent } from './components/product-categories/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/product-categories/list-categorie/list-categorie.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageTemplatesComponent } from './components/manage-templates/manage-templates.component';
import { ManageReportsComponent } from './components/manage-reports/manage-reports.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PushNotificationsComponent } from './components/push-notifications/push-notifications.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    LoginComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    ManageTemplatesComponent,
    ManageReportsComponent,
    PrivacyPolicyComponent,
    ChangePasswordComponent,
    PushNotificationsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSnackBarModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
