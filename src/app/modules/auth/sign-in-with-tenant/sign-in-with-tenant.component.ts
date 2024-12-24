import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@data/services/auth.service';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Patterns } from '@shared/services/pattern';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sign-in-with-tenant',
  standalone: true,
  imports: [MatButtonModule,FuseAlertComponent, CommonModule , NgIf, RouterLink, MatIconModule, FormsModule, ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatProgressSpinnerModule,TranslocoModule],
  templateUrl: './sign-in-with-tenant.component.html',
  styleUrl: './sign-in-with-tenant.component.scss',
})
export class SignInWithTenantComponent {
  // injection
  _formBuilder = inject(FormBuilder);
  _translocoService = inject(TranslocoService);
  _authServices = inject(AuthService);
  _router = inject(Router)

  // props
  passwordPattern = Patterns.passwordPattern;
  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: '',
  };
  signInForm: UntypedFormGroup;
  showAlert: boolean = false;
  _currentLang = this._translocoService.langChanges$;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {

      // Create the form
      this.signInForm = this._formBuilder.group({
        email    : ['', [Validators.required, Validators.email]],
        password   : ['', [Validators.required]],
    });
  }

  signIn(){
    this.signInForm.disable();
    this.showAlert = false;
    this._authServices.loginWithTenant(this.signInForm.value)
    .pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.signInForm.enable()))
    .subscribe({
        next: (response) => {
            if (response) {
                localStorage.setItem('user',JSON.stringify(response))
              console.log(response);

              }
          },
          error: (error) => {
            this.alert = {
                type:'error',
                message: error?.error?.message
                };
            this.showAlert = true
            }
        })
  }


}
