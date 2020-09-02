import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) {}
  /* get github users */
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  /* get github user repositories */
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}/repos`);
  }
}
