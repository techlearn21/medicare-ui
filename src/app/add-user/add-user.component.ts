import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {}


  onSubmit() {
    this.saveUser();
    this.goToUserList()
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
    },
    error => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['/user-list']);
  }

}
