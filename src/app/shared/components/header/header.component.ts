import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public isOpenNav = new EventEmitter();
  public constructor(
    private _authservice:AuthserviceService
  ) {

  }

  public ngOnInit(): void {

  }

  public openNav(data: boolean) {
    this.isOpenNav.emit(data)
  }

  onlogout(){
    debugger
    this._authservice.logout()
  }
} 
