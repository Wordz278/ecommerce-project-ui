import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-super.component.html',
  styleUrls: ['./board-super.component.css']
})
export class BoardSuperComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getSuperBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
