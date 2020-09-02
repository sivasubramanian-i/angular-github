import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersReposComponent } from "./users/users-repos/users-repos.component";

/* routes declaration */
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: UsersListComponent
  },
  {
    path: "users",
    component: UsersListComponent
  },
  {
    path: "users/:userName",
    component: UsersReposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
