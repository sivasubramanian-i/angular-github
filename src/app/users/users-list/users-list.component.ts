import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) {}

  ngOnInit() {
    /* call github user service */
    this.users = this.userService.getUsers();
  }
}
