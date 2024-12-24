import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithTenantComponent } from './sign-in-with-tenant.component';

describe('SignInWithTenantComponent', () => {
  let component: SignInWithTenantComponent;
  let fixture: ComponentFixture<SignInWithTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithTenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInWithTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
