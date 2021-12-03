import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../common';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: indianred;
      padding-left: 10px;
    }

    .error input {
      background-color: #E3C3E5
    }

    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error ::-ms-input-placeholder {
      color: #999
    }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveProfile(value: any): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(value);
      this.toastr.success('Profile Saved');
    }

  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}
