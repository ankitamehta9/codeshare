import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user: User;
  isCollapsed: any;

  constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit() {
    this.isCollapsed = true;

    this.messageService.clear();
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    // this.user = JSON.parse(this.activatedRoute.snapshot.params.user);
    console.log(this.user);
  }



}
