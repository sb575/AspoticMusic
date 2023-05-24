import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AspoticserviceService } from '../services/aspoticservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {


  constructor(public aspoticServ: AspoticserviceService, public authService: AuthService, public router: Router) {
  }


  onSignOutClick() {
    const userId = this.authService.getUserIdFromToken();
    this.authService.signOut(userId).subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    });
  }

}
