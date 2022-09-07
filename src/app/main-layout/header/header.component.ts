import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { StorageService } from 'src/app/core/services/storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [ // using status here for transition
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0.2s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private storageService: StorageService) {}

  status: boolean = false;

  public displayName: string = '';

  ngOnInit(): void {
    let user = this.storageService.getUserData();
    if(user && user != '') {
      this.displayName = user['firstName']+" "+user['lastName'];
    }
  }

  toggleSidebar() {
    this.status = !this.status;       
    this.toggleSidebarForMe.emit();
  }

  doLogout = () => {
    this.storageService.clear();
    this.router.navigate(['']);
  }
}
