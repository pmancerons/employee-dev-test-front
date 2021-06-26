import { Component} from '@angular/core';
import { NavItem } from './model/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employee-dev-test-front';

  menu: NavItem [] = [
        {
          displayName: 'List all employees',
          route: '/employees',
          disabled: false
        }
      ];

}
