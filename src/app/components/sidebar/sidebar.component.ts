import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
disableAddNew: boolean = false;
  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  adminPrivillage(e) {
    this.flashMessage.show('Sorry you do not have admin privillages to add a new user!', {
      cssClass: 'alert-danger', timeOut: 5000
    });

    e.preventDefault();
  }

}
