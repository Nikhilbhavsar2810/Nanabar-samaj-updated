import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  /**
   * Life Cycle Method
   */
  constructor(private toastr: ToastrService) { }

  public showSuccess(message: any, title: any) {
      this.toastr.success(message, title, {closeButton: true, positionClass: 'toast-top-center', timeOut: 60000});
  }

  public showError(message: any, title: any) {
      this.toastr.error(message, title, {closeButton: true, positionClass: 'toast-top-center', timeOut: 60000});
  }

  public showInfo(message: any, title: any) {
      this.toastr.info(message, title, {closeButton: true});
  }

  public showWarning(message: any, title: any) {
      this.toastr.warning(message, title, {closeButton: true, positionClass: 'toast-top-center', timeOut: 60000});
  }
}
