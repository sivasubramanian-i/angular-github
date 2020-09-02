import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserService } from "./services/user.service";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersReposComponent } from "./users/users-repos/users-repos.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UsersReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
