import {Injectable} from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
  success(msg: string, title?: string): void {
    toastr.success(msg, title);
  }
}
