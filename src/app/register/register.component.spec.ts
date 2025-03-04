import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { of, throwError} from "rxjs";

import { RegisterComponent } from './register.component';
import { AuthService } from "../_services/auth.service";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {

    const authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.username).toBeNull();
    expect(component.form.email).toBeNull();
    expect(component.form.password).toBeNull();
  });

  it('should say registration success', () =>{
    const mockResponse = { message: 'Registration successful' };
    authService.register.and.returnValue(of(mockResponse));

    component.form.username = 'testuser';
    component.form.email = 'test@example.com';
    component.form.password = 'password123';

    component.onSubmit();

    expect(authService.register).toHaveBeenCalledWith('testuser', 'test@example.com', 'password123');
    expect(component.isSuccessful).toBeTrue();
    expect(component.isSignUpFailed).toBeFalse();
  });
});

