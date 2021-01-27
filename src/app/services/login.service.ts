import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(model: any) {
    const url = `${model.url}/api/user/login`;
    const input: any = {
      userid: model.userid,
      password: model.password,
      htid: model.htid
    }
    return this.http.post<any>(url, input,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'json',
        observe: 'response'
      });
  }
}
