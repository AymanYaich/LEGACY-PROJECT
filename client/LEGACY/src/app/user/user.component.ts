import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  allGuides: any = [];

  guideIn = false;
  ngOnInit(): void {}

  getUsers() {
    return this.http.get('http://localhost:8000/guides').subscribe((datas) => {
      this.allGuides = datas;
    });
  }
}
