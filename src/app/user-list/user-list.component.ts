import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users!: string[];
  private subscriptions: Subscription = new Subscription();

  constructor(private userService: UserService) 
  {}

  ngOnInit() {
    this.subscriptions.add(this.userService.users$.subscribe((users)=>{
      this.users = users;
    }))
  }


  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }


}
