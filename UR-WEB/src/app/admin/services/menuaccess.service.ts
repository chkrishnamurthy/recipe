import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MenuaccessService {
  constructor(private http: HttpClient) {}

  url = "http://127.0.0.1:5003/api/menuaction";

  getmenuaccess(): Observable<any> {
    return this.http.get(this.url);
  }
}
