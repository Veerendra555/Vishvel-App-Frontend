import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion';
const componentMaterial = [MatCardModule,MatExpansionModule,MatSnackBarModule,MatIconModule,MatSelectModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    componentMaterial
],
    
  exports: [componentMaterial]
})
export class AppMaterialModule { }

