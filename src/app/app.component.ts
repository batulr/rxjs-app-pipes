import { Component, OnInit } from '@angular/core';
import { UserDispService } from './user-disp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Api-Call';

  public user = [] as any;
  designation = '';

  constructor(private users: UserDispService) {}

  ngOnInit() {
    this.users.getData().subscribe((data) => (this.user = data));
  }
}
