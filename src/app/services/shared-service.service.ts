import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  isShowSideMenu: boolean = false;
  // toggle side menu start
  setter() {
    console.log(!this.isShowSideMenu)
    return this.isShowSideMenu = !this.isShowSideMenu;
  }
  getter()
  {
    return this.isShowSideMenu;
  }

  constructor() { 


  }
}
