import {Component, inject} from '@angular/core';
import {User} from "./interfaces/user.interface";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jest';
  users: User[] = [];
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });

    this.userService.getCustomUser().subscribe((user) => {
      console.log(user);
    });
  }
}
