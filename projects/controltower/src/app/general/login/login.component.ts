import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseService, Cache, Constants } from 'common';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;
  isLoginLoading: boolean = false;

  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* if (this.baseService.isLogin()) this.router.navigateByUrl('/home'); */
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      remember: [false],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (!this.validateForm.invalid) {
      this.isLoginLoading = true;
      if(this.validateForm.controls.userName.value==="admin" && this.validateForm.controls.password.value==='050678'){
        /* this.baseService.storeCheck('Success',1000 * 60 * 60 * 24); */
        this.isLoginLoading = false;
        this.baseService.checkLogin();
        setTimeout(() => {
          this.router.navigateByUrl('/controltower/home');
        }, 200);

       /*  setTimeout(() => {
          this.isLoginLoading = false;
          this.router.navigateByUrl('/controltower/home');

        }, 200); */

      }else{
        this.isLoginLoading = false;
        this.errorMsg = 'Tên đăng nhập hoặc mật khẩu chưa chính xác';
      }

    }
  }
}
