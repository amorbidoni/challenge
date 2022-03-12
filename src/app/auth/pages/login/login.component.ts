import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalAnimation } from '../../animations/modal.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ModalAnimation],
})
export class LoginComponent {
  modalError: boolean = false;
  textAlert: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService
  ) {}

  // reactive FORM

  myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberPass: [],
  });

  // SUBMIT
  login() {
    const { username, password } = this.myForm.value;
    // console.log(this.myForm.value);
    if (this.myForm.touched && this.myForm.valid) {
      this.AuthService.login(username, password).subscribe((resp) => {
        if (resp.token) {
          // console.log(resp);
          this.router.navigate(['/dashboard']);
        } else {
          // console.log(resp);
          this.modalError = true;
          this.textAlert = resp;
        }
      });
    }
  }
  closeModalAlert() {
    this.modalError = false;
  }
}
