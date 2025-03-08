import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'finalProject',
  templateUrl: './finalProject.component.html',
  styleUrls: ['./finalProject.component.css']
})
export class FinalProject implements OnInit {
  users: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
