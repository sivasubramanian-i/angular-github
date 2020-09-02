import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-users-repos",
  templateUrl: "./users-repos.component.html",
  styleUrls: ["./users-repos.component.css"]
})
export class UsersReposComponent implements OnInit {
  repos;

  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    /* call github user repositories service */
    this.route.params.subscribe(params => {
      const username = params["userName"];
      this.userService.getUser(username).subscribe(user => (this.repos = user));
    });
  }
}
