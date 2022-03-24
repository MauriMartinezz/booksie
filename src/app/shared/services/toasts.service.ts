import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  private showToastSuccess: boolean = false;

  get showToastSuccessGetter(): boolean {
    return this.showToastSuccess;
  }
  set showToastSuccessSetter(state: boolean) {
    this.showToastSuccess = state;
  }
  constructor(private toastr: ToastrService) {}

  showSuccess(title: string, desc?: string) {
    if (this.showToastSuccess) {
      this.toastr.success(desc, title);
    }
  }

  showInfo(title: string, desc?: string) {
    this.toastr.info(desc, title);
  }
}
