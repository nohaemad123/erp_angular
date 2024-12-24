import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithoutTenantComponent } from './sign-in-without-tenant.component';

describe('SignInWithoutTenantComponent', () => {
  let component: SignInWithoutTenantComponent;
  let fixture: ComponentFixture<SignInWithoutTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithoutTenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInWithoutTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
