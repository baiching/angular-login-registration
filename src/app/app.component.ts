import { Component } from '@angular/core';
import { StorageService } from "./_services/storage.service";
import { AuthService } from "./_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth-frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = true;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    else {
      this.roles = [];
      this.showAdminBoard = false;
      this.showModeratorBoard = false;
      this.username = '';
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.authService.setLoggedIn(false);
        this.router.navigate(['/login']);
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });



  }
}
