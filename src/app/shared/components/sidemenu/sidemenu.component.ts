import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})

export class SidemenuComponent {
  @Input() subMenuState;
  public sidebarShow: boolean = false;
  opened: boolean;
  showMenu = true;
  ngOnChanges(){
    console.log("inside ngOnChanges with subMenuState: ",this.subMenuState );
    this.showMenu = this.subMenuState;
  }
}
